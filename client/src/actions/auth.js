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
        console.log(error);
    }
};


// export const login = (formData, router) => asyn (dispatch) => {
//     try {
//         const { data } = await api.signin(formData);

//         dispatch({type: 'AUTH', data});

//         router.push('/');
//     }
// }

export const logout = (formData, router) => async 