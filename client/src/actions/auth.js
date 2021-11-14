import * as api from '../api/index.js';


export const signup = (formData,router) => async (dispatch) => {
    try{
        const response = await api.signup(formData);
        console.log(response)
        if(response.status === 201){
        
        const {data} = response;
        dispatch({ type: 'AUTH', data });
        router.push('/listings');
        }
        else{
            router.push('/auth');
        }
    } catch (error) {
        console.log(error);
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

export const logout = (router) => async (dispatch) => {
    try {
        localStorage.removeItem('token');
        localStorage.removeItem('profile');
        dispatch({type: 'LOGOUT'});
        router.push('/');
    } catch (error) {
        console.log(error)
    }
}