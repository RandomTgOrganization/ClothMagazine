import {createSlice} from '@reduxjs/toolkit'
import jwt_decode from 'jwt-decode'

const initialAuthState = {

user : localStorage.getItem('token')? jwt_decode(localStorage.getItem('token')):null
}


const authSlice = createSlice({

    name:'auth',
    initialState : initialAuthState,

    reducers : {},
    extraReducers : (builder) => {
        builder
    }
})