import { createAsyncThunk } from "@reduxjs/toolkit";
import { $regApi } from "../customAxios/customAxios";


export const registerThunk = createAsyncThunk('user/register/',async (registerData, {rejectWithValue}) => {


    try {

        const response = await $regApi.post('register/',registerData) 
    
    
        if (response.status != 200 ) {
          throw new Error('Bad Request');
        }
    
    
        const data = await response.data    

        console.log(data)
    
    
        return data
    
    
      } catch (err) {
    
        return rejectWithValue(err.message)
      }



})