import * as api from '../api/index.js';

export const createListing = (formData,router) => async (dispatch) => {
    try {
        localStorage.getItem('token')
        const {data} = await api.createListing(formData);
        // dispatch({type: 'CREATE', data});
        router.push('/');
    }catch(error){
    console.log(error)
    return error;
    }
}

export const getListings = () => async (dispatch) => {
    try {
        // localStorage.getItem('token')
        const {data} = await api.getListings();
        // dispatch({type: 'CREATE', data});
        // router.push('/');
        // console.log('actions is working');
        console.log(data)
        return data;
    }catch(error){
        console.log(error)
    return error;
    }
}