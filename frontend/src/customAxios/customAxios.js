import axios from 'axios';




let isRefreshing = false


export const API_URL = 'http://localhost:8000/api'



export const $regApi = axios.create({
    baseURL: API_URL,
    withCredentials:true,

  });

export const $Api = axios.create({
    baseURL: API_URL,
    withCredentials:true

});


$Api.interceptors.request.use((config) =>
{

    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`

    return config
})


