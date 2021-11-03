export const listingReducer = (listings = [], action) => {
    switch (action.type){
        case 'FETCH_ALL':
            // console.log(action.payload)
            return action.payload;
        // case 'CREATE':
        //     return [...listings, action.payload];
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
        default:
            return userListings;
    }
}