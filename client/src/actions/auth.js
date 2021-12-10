import * as api from '../api/index.js';


export const signup = (formData, router) => async (dispatch) => {
    try {
        const response = await api.signup(formData);
        console.log(response)
        if (response.status === 201) {
            const { data } = response;
            // dispatch({ type: 'AUTH', data });
            // router.push('/auth');
        }
        else {
            const { error } = response;
            dispatch({ type: 'SIGNUP_ER', error })
            router.push('/auth');
        }
    } catch (error) {
        console.log(error);
    }
};


export const login = (formData, router) => async (dispatch) => {
    try {
        const response = await api.login(formData);
        if (response.status === 200) {
            dispatch({ type: 'AUTH', data:response.data });
        }
        else{
            dispatch({type: 'LOGIN_ER',data:response})
        }
        router.push('/listings');
    } catch (error) {
        dispatch({type: 'LOGIN_ER',data:error.response.data.message})
        // console.log()
    }
};

export const resetPass = (formData, router) => async (dispatch) => {
    try {
        const { data } = await api.resetPass(formData)
        // dispatch({type:'RESET',data});
        // router.push('/');
    }
    catch (error) {
        console.log(error)
    }
}

export const logout = (router) => async (dispatch) => {
    try {
        localStorage.removeItem('token');
        localStorage.removeItem('profile');
        dispatch({ type: 'LOGOUT' });
        router.push('/');
    } catch (error) {
        console.log(error)
    }
}
