import * as api from '../api/index.js';


export const signup = (formData, router) => async (dispatch) => {
    try {
        const response = await api.signup(formData);
        if (response.status === 201) {
            const { data } = response;
            dispatch({ type: 'SIGNUP', data: data }); 
            dispatch({ type: 'success',data:"Signup successful" })
            const otp = await api.getOTP({ email: data.email, type: "VERIFICATION" });
            dispatch({ type: 'GET_OTP', data: otp.data });
        }
        else {
            const { error } = response;
            dispatch({ type: 'error', data:error })
            // router.push('/auth');
        }
    } catch (error) {
        dispatch({ type: 'error', data: error.response?.data.message })
    }
};


export const login = (formData, router) => async (dispatch) => {
    try {
        const response = await api.login(formData);
        if (response.status === 200) {
            dispatch({ type: 'AUTH', data: response.data });
            dispatch({type:"success",data:"Logged in"})
            router.push('/listings');
        }
        // dispatch({type:"noAlert"})
    } catch (error) {
        
        dispatch({ type: 'error', data: error.response?.data?.message });
        if(error.response.status === 401){
            const otp = await api.getOTP({ email: error.response?.data.email, type: "VERIFICATION" });
            dispatch({ type: 'GET_OTP', data: otp.data });
        }
     
    }
};

export const resetPass = (formData, router) => async (dispatch) => {
    try {
        const response = await api.resetPass(formData);
        dispatch({type:"success",data:response?.data.message});
    }
    catch (error) {
        dispatch({type:'error',data:error.response?.data.message})
    }
}

export const logout = (router) => async (dispatch) => {
    try {
        localStorage.removeItem('token');
        localStorage.removeItem('profile');
        dispatch({ type: 'LOGOUT' });
        router.push('/');
    } catch (error) {
        // add error alert here
        console.log(error)
    }
}
