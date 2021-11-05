import axios from 'axios';
const API = axios.create({ baseURL: 'http://localhost:5000/api'});


export const login = (formData) => API.post('/user/login',formData);
export const signup = (formData) => API.post('/user/signup',formData);

//otp 
export const getOTP = (formData) => API.post('/otp/get',formData);
export const verifyOTP = (formData) => API.post('/otp/verify',formData);

//listing 
export const createListing = (formData) => API.post('/create-listing', formData, { headers: { Authorization: localStorage.getItem('token') } })
export const getListings = () => API.get('/get-listings',{ headers: { Authorization: localStorage.getItem('token') } })

//trade
export const createTrade = (formData) => API.post("/create-trade",formData,{ headers: { Authorization: localStorage.getItem('token') } });
export const getTradeHist = () => API.get("/trade-history",{ headers: { Authorization: localStorage.getItem('token') } });

//creation
export const getUserListings = (userID) => API.get(`/user-listing/${userID}`);

//chat
export const getChat = (uid) => API.get(`chat/getChat/${uid}`)
export const fetchContacts = (UserID) => API.get(`chat/getContacts/${UserID}`)
