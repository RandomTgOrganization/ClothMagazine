import {configureStore,combineReducers } from '@reduxjs/toolkit'
import { authReducer } from "./slices/authSlice"
import thunk from 'redux-thunk'


const allReducers = combineReducers({

    auth : authReducer,

})



const store = configureStore ({
    reducer : allReducers,
    middleware: [thunk],
})



export default store