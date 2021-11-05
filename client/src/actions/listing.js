import * as api from '../api/index.js';

export const createListing = (formData,router) => async (dispatch) => {
    try {
        localStorage.getItem('token')
        const {data} = await api.createListing(formData);
        dispatch({type: 'CREATE', data});
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