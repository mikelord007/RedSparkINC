import * as api from '../api/index.js';


export const signup = (formData,router) => async (dispatch) => {
    try{
        const {form,otp,verification_key} = formData;
        const otp_verify = { verification_key:verification_key,otp:otp,check:form.email}
        const response = await api.verifyOTP(otp_verify);
        if(response.status === 200 && response.data.Status === "Success" ){
        const { data } = await api.signup(form);
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

// export const logout = (formData, router) => async 