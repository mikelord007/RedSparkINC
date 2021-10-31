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
export const getListings = () => API.get('/get-listings',{ headers: { Authorization: localStorage.getItem('token') } })

//trade
export const createTrade = (formData) => API.post("/create-trade",formData,{ headers: { Authorization: localStorage.getItem('token') } });
export const getTradeHist = () => API.get("/trade-history",{ headers: { Authorization: localStorage.getItem('token') } });