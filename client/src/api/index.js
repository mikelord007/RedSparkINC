import axios from 'axios';
const API = axios.create({ baseURL: 'http://localhost:5000/api'});


export const login = (formData) => API.post('/user/login',formData);
export const signup = (formData) => API.post('/user/signup',formData);

//listing 
export const createListing = (formData) => API.post('/create-listing', formData, { headers: { Authorization: localStorage.getItem('token') } })
export const getListings = () => API.get('/get-listing')
export const getUserListings = (userID) => API.get(`/user-listing/${userID}`);
export const getChat = (uid) => API.get(`chat/getChat/${uid}`)
export const fetchContacts = (UserID) => API.get(`chat/getContacts/${UserID}`)
