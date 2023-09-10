import {createSlice} from '@reduxjs/toolkit'
import jwt_decode from 'jwt-decode'
import { loginThunk } from '../../thunks/loginThunk'
import { registerThunk } from '../../thunks/registerThunk'

const initialAuthState = {

  user : localStorage.getItem('accessToken') ? jwt_decode(localStorage.getItem('accessToken')) : null,
  isLoading : false,
status : null,
errors : ''
}


const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.status = null;
      localStorage.removeItem('accessToken');
      state.errors = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state, action) => {
        state.status = 'pending';
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.status = 'rejected';
        state.errors = action.payload;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.status = 'success';
        state.isLoading = true;
        state.user = jwt_decode(action.payload.access);
        localStorage.setItem('accessToken', action.payload.access);
      })
      .addCase(registerThunk.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.status = 'failed';
        state.errors = action.payload;
        console.log(action.payload)
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.status = 'success';
        state.isLoading = true;
        localStorage.setItem('accessToken', action.payload.access_token)
        state.user = jwt_decode(action.payload.access_token)
      });
  },
});



export const { reducer: authReducer, actions: authActions } = authSlice;
