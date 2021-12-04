export const errorReducer = (state = { signupEr: null, loginEr: null, otpEr: null ,chatEr:null},action) => {
    switch (action.type) {
        case 'SIGNUP_ER':
            console.log(action.data)
            return {...state,signupEr:action.data}
        case 'LOGIN_ER':
            console.log(action.data)
            return {...state,loginEr:action.data}
        default:
            return state;
    }
}