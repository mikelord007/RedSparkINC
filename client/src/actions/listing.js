import * as api from '../api/index.js';

export const createListing = (formData) => async (dispatch) => {
    try {
        //eslint-disable-next-line
        const { data } = await api.createListing(formData);
        dispatch({ type: 'CREATED-LISTING', data });
    } catch (error) {
        console.log(error) // remove in production
        dispatch({type: 'error',data:"Something went wrong"})
        return error;
    }
}

// export const getListings = () => async (dispatch) => {
//     try {
//         const { data } = await api.getListings();
//         dispatch({ type: 'FETCH_ALL', payload: data });
//         return data;

//     } catch (error) {
//         for (var key in error) {
//             if (Object.prototype.hasOwnProperty.call(error, key)) {
//                 var val = error[key];
//                 console.log(`${key}: ${val}`) //remove this in prod
//             }
//         }
        
//         if (error.response.status === 403){
//             dispatch({type:'LOGOUT'});
//         }        
//     }
// }

export const getUserListings = (UserID) => async (dispatch) => {
    try {
        const { data } = await api.getUserListings(UserID) // list of objects of type listings
        dispatch({ type: 'USER-LISTINGS', data })
    }
    catch (error) {
        console.log(error) //remove this in prod
        if (error.response.status === 403){
            dispatch({type:'LOGOUT'});
        }   
    }
}

export const addNewContact = (listing, history) => async (dispatch) => {
    try {

        const { data } = await api.addNewContact(listing)
        dispatch({ type: 'NEW-CONTACT', data })
        history.push("/chat")

    }
    catch (error) {
        console.log(error) //remove this in prod
        if (error.response.status === 403){
            dispatch({type:'LOGOUT'});
        }   
    }
}

export const getCurrentListing = (lID) => async (dispatch) => {
    try {
        const { data } = await api.getCurrentListing(lID)
        dispatch({ type: "CURRENT-LISTING", data })
    }
    catch (error) {
        console.log(error) //remove this in prod
        if (error.response.status === 403){
            dispatch({type:'LOGOUT'});
        }   
    }
}


export const closeListing = (listing, history) => async (dispatch) => {

    try {
        //eslint-disable-next-line
        const { data } = await api.closeListing(listing);
        dispatch({ type: 'CLOSE-LISTING', data });
        history.push("/trade")
    } catch (error) {
        console.log(error) //remove this in prod
        if (error.response.status === 403){
            dispatch({type:'LOGOUT'});
        }
    }
}

export const deleteListing = (lID) => async(dispatch) => {

    try {
        const {data} = await api.deleteListing(lID);
        dispatch({type: 'DELETE-LISTING', data});
        
    } catch (error) {
        console.log(error) //remove this in prod
        if (error.response.status === 403){
            dispatch({type:'LOGOUT'});
        }
    }

}