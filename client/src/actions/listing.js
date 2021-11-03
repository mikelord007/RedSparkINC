import * as api from '../api/index.js';

export const createListing = (formData,router) => async (dispatch) => {
    try {
        localStorage.getItem('token')
        //eslint-disable-next-line
        const {data} = await api.createListing(formData);
        dispatch({type: 'CREATED-LISTING', data});
    }catch(error){
    console.log(error)
    return error;
    }
}

export const getListings = () => async (dispatch) => {
    try {
        const {data} = await api.getListings();
        dispatch({type: 'FETCH_ALL', payload:data});
        return data;
        
    }catch(error){
        console.log(error)
    return error;
    }
}

export const getUserListings = (UserID) => async (dispatch) => {
    try{
        const {data} = await api.getUserListings(UserID) // list of objects of type listings
        dispatch({type: 'USER-LISTINGS',data})
    }
    catch(error){
        console.log(error)
    }
}