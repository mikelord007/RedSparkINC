

export const authReducer = (state = { authData: null, loggedIn: false }, action) => {
    switch (action.type) {
        case 'AUTH':
<<<<<<< HEAD
            localStorage.setItem('profile', JSON.stringify({ ...action?.data.result }));

=======
            console.log(action.data);
            localStorage.setItem('profile', JSON.stringify({ ...action?.data.result }));
            
>>>>>>> c8263ee2da523ac1645181f9590c916e02ea0e71
            localStorage.setItem('token',action?.data.token);
            return { ...state, authData: action.data ,loggedIn: true };
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
