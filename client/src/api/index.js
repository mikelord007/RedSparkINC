import axios from 'axios';
const API = axios.create({ baseURL: 'http://localhost:5000/api'});

// TODO: add localstorage fetch
// API.interceptors.request.use((req) => {
//     if (localStorage.getItem('profile'))
// })


// authentication
export const login = (formData) => API.post('/user/login',formData);
export const signup = (formData) => API.post('/user/signup',formData);

//listing 
export const createListing = (formData) => API.post('/create-listing', formData, { headers: { Authorization: localStorage.getItem('token') } })