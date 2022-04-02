import axios from 'axios';

const API = axios.create({ baseURL: `https://www.redsparkapi.me/api`});
// const API = axios.create({ baseURL: `https://peaceful-waters-54837.herokuapp.com/api`});

//auth
export const login = (formData) => API.post('/user/login',formData);
export const signup = (formData) => API.post('/user/signup',formData);
export const resetPass = (formData) => API.post('/user/reset-password',formData);

//otp 
export const getOTP = (formData) => API.post('/otp/get',formData);
export const verifyOTP = (formData) => API.post('/otp/verify',formData);
export const resetPassOTP = (formData) => API.post('/otp/verify',formData);

//listing 
export const createListing = (formData) => API.post('/create-listing', formData, { headers: { Authorization: localStorage.getItem('token') } })
// export const getListings = () => API.get('/get-listings',{ headers: { Authorization: localStorage.getItem('token') } })
export const addNewContact = (listing) => API.post(`/add-contact`, listing, { headers: { Authorization: localStorage.getItem('token') } })
export const getCurrentListing = (lID) => API.get(`/current-listing/${lID}`, { headers: { Authorization: localStorage.getItem('token') } }) 
export const refreshListings = () => API.get(`/refresh-listing`, { headers: { Authorization: localStorage.getItem('token') } }) 


//trade
export const createTrade = (formData) => API.post("/create-trade",formData,{ headers: { Authorization: localStorage.getItem('token') } });
export const getTradeHist = () => API.get("/trade-history",{ headers: { Authorization: localStorage.getItem('token') } });
export const closeListing = (listing, recipient) => API.post("/close-deal", {listing, recipient}, { headers: { Authorization: localStorage.getItem('token') } })

//creation
export const getUserListings = () => API.get(`/user-listing`,{ headers: { Authorization: localStorage.getItem('token') } });
export const deleteListing = (lID) => API.post(`/del-user-lisitng`,{'lID':lID},{ headers: { Authorization: localStorage.getItem('token') } })

//chat
export const getChat = (uid) => API.get(`chat/getChat/${uid}`,{ headers: { Authorization: localStorage.getItem('token') } })
export const fetchContacts = (UserID) => API.get(`chat/getContacts/${UserID}`,{ headers: { Authorization: localStorage.getItem('token') } })