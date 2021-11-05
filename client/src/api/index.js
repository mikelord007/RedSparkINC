import axios from 'axios';
const API = axios.create({ baseURL: 'http://localhost:5000/api'});


export const login = (formData) => API.post('/user/login',formData);
export const signup = (formData) => API.post('/user/signup',formData);

//listing 
export const createListing = (formData) => API.post('/create-listing', formData, { headers: { Authorization: localStorage.getItem('token') } })
export const getListings = () => API.get('/get-listings',{ headers: { Authorization: localStorage.getItem('token') } })

//trade
export const createTrade = (formData) => API.post("/create-trade",formData,{ headers: { Authorization: localStorage.getItem('token') } });
export const getTradeHist = () => API.get("/trade-history",{ headers: { Authorization: localStorage.getItem('token') } });

//creation
export const getUserListings = (userID) => API.get(`/user-listing/${userID}`,{ headers: { Authorization: localStorage.getItem('token') } });

//chat
export const getChat = (uid) => API.get(`chat/getChat/${uid}`,{ headers: { Authorization: localStorage.getItem('token') } })
export const fetchContacts = (UserID) => API.get(`chat/getContacts/${UserID}`,{ headers: { Authorization: localStorage.getItem('token') } })

export const addNewContact = (listing) => API.post(`/add-contact`, listing, { headers: { Authorization: localStorage.getItem('token') } })