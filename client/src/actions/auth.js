import * as api from '../api/index.js';


export const signup = (formData,router) => async (dispatch) => {
    try{
        console.log('actions: ')
        console.log(formData)
        const { data } = await api.signup(formData);
        dispatch({ type: 'AUTH', data });
        console.log('result:')
        console.log(data)
        router.push('/');
    } catch (error) {
        return error;
    }
};


export const login = (formData, router) => async (dispatch) => {
    try {
        const { data } = await api.login(formData);

        dispatch({ type: 'AUTH', data });

        router.push('/');
    } catch (error) {
    return error;
    }
};

// export const logout = (formData, router) => async 