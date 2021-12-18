// export const errorReducer = (state = { signupEr: null, loginEr: null, otpEr: null, chatEr: null }, action) => {
//     switch (action.type) {
//         case 'SIGNUP_ER':
//             return { signupEr: action.data, loginEr: null, otpEr: null, chatEr: null }
//         case 'LOGIN_ER':
//             return { loginEr: action.data, signupEr: null, otpEr: null, chatEr: null }
//         case 'OTP_ER':
//             return { otpEr: action.data, signupEr: null, loginEr: null, chatEr: null }
//         case 'SIGNUP_SUCCESS':
//             return { ...state, signupEr: "Account Created" }
//         case 'OTP_SUCCESS':
//             return { ...state, otpEr: "Verified" }
//         case 'LOGIN_SUCCESS':
//             return { ...state, loginEr: 'Logged In' }
//         default:
//             return state;
//     }
// }

export const alertsReducer = (state = {type:null, message:null},action) => {
    switch(action.type){
        case 'error':
            return {type:'error',message:action.data}
        case 'success':
            return {type:'success',message:action.data}
        default:
            return state;
    }

}