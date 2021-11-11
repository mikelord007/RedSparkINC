import * as api from '../api/index.js';

export const createListing = (formData, router) => async (dispatch) => {
    try {
        //eslint-disable-next-line
        const { data } = await api.createListing(formData);
        dispatch({ type: 'CREATED-LISTING', data });
    } catch (error) {
        console.log(error)
        return error;
    }
}

export const getListings = () => async (dispatch) => {
    try {
        const { data } = await api.getListings();
        dispatch({ type: 'FETCH_ALL', payload: data });
        return data;

    } catch (error) {
        console.log(error)
        return error;
    }
}

export const getUserListings = (UserID) => async (dispatch) => {
    try {
        const { data } = await api.getUserListings(UserID) // list of objects of type listings
        dispatch({ type: 'USER-LISTINGS', data })
    }
    catch (error) {
        console.log(error)
    }
}

export const addNewContact = (listing, history) => async (dispatch) => {
    try {

        const { data } = await api.addNewContact(listing)
        dispatch({ type: 'NEW-CONTACT', data })
        history.push("/chat")

    }
    catch (error) {
        console.log(error)
    }
}

export const getCurrentListing = (lID) => async (dispatch) => {
    try {
        const { data } = await api.getCurrentListing(lID)

        dispatch({ type: "CURRENT-LISTING", data })
    }
    catch (error) {
        console.log(error)
    }
}


export const closeListing = (listing, history) => async (dispatch) => {

    try {
        //eslint-disable-next-line
        const { data } = await api.closeListing(listing);
        dispatch({ type: 'CLOSE-LISTING', data });
        history.push("/trade")
    } catch (error) {
        console.log(error)
        return error;
    }

}