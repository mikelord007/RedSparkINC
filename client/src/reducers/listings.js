export const listingReducer = (listings = [], action) => {
    switch (action.type){
        case 'FETCH_ALL':
            return action.payload;
        default: 
            return listings;
    }
}

export const UserListingReducer = (userListings = [], action) => {
    switch (action.type){
        case 'USER-LISTINGS':
            return action.data;
        case 'CREATED-LISTING':
            return [...userListings,action.data.savedListing]
        case 'DELETE-LISTING':
            return 
        default:
            return userListings;
    }
}

export const currentListing = (state = {}, action) => {
    switch(action.type){
        case 'CURRENT-LISTING':
            return action.data;
        default:
            return state
    }
}