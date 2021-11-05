import * as api from '../api/index.js';


export const signup = (formData,router) => async (dispatch) => {
    try{
        const { data } = await api.signup(formData);
        dispatch({ type: 'AUTH', data });
        router.push('/');
    } catch (error) {
        return error;
    }
};


export const login = (formData, router) => async (dispatch) => {
    try {
        const { data } = await api.login(formData);

        dispatch({ type: 'AUTH', data });

        router.push('/listings');
    } catch (error) {
    return error;
    }
};

// export const logout = (formData, router) => async 