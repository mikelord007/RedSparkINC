

export const UserListingReducer = (userListings = [], action) => {
    switch (action.type){
        case 'USER-LISTINGS':
            return action.data;
        default:
            return userListings;
    }
}