import * as api from '../api/index.js';

export const createListing = (formData,router) => async (dispatch) => {
    try {
        localStorage.getItem('token')
        const {data} = await api.createListing(formData);
        // dispatch({type: 'CREATE', data});
        router.push('/');
    }catch(error){
    return error;
    }
}