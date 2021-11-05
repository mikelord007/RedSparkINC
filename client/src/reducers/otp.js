export const OtpReducer = (state = { verification_key: null }, action) => {
    switch (action.type) {
        case 'GET_OTP':
            return { verification_key: action.data.verification_key }
        default:
            return state;
    }
}