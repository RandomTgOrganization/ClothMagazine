import axios from 'axios';




let isRefreshing = false


export const API_URL = 'http://localhost:8000/api/v1/user/'



export const $regApi = axios.create({
    baseURL: API_URL,
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


