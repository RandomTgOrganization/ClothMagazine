import { createAsyncThunk } from "@reduxjs/toolkit";
import { $Api } from "../customAxios/customAxios";



export const loginThunk = createAsyncThunk('/login',async (loginData, {rejectWithValue}) => {


    try {

        const response = await $Api.post('token/',loginData) 
    
    
        if (response.status != 200 ) {
          throw new Error('Login failed. Please check your credentials.');
        }
    
    
        const data = await response.data    
    
    
        return data
    
    
      } catch (err) {
    
        return rejectWithValue(err.message)
      }



})