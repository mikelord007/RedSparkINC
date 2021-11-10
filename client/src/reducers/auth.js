

export const authReducer = (state = { authData: null, loggedIn: false }, action) => {
    switch (action.type) {
        case 'AUTH':
            localStorage.setItem('profile', JSON.stringify({ ...action?.data.result }));
            
            localStorage.setItem('token',action.data.token);
            return { ...state, authData: action.data.result ,loggedIn: true };
        case 'LOGOUT':
            localStorage.clear();

            return { ...state, authData: null, loggedIn: false };
        default:
            const profile = localStorage.getItem('profile');
            if (profile !== null )
            return {authData:profile, loggedIn:true};
            else return {authData:null, loggedIn:false};
    }
};
