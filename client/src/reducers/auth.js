

export const authReducer = (state = { authData: null, loggedIn: false, email: "" }, action) => {
    switch (action.type) {
        case 'SIGNUP':
            return { ...state, email: action?.data.email }
        case 'AUTH':
            localStorage.setItem('profile', JSON.stringify({ ...action?.data.result }));

            localStorage.setItem('token', action?.data.token);
            return { ...state, authData: action.data, loggedIn: true };
        case 'LOGOUT':
            localStorage.clear();

            return { ...state, authData: null, loggedIn: false };
        default:
            const profile = localStorage.getItem('profile');
            if (profile !== null)
                return { authData: profile, loggedIn: true };
            else return state;
    }
};
