import * as api from '../api/index.js';

export const createListing = (formData) => async (dispatch) => {
    try {
        //eslint-disable-next-line
        const { data } = await api.createListing(formData);
        dispatch({ type: 'CREATED-LISTING', data });
    } catch (error) {
        dispatch({ type: 'error', data: "Something went wrong" })
        return error;
    }
}

export const getUserListings = (UserID) => async (dispatch) => {
    try {
        const { data } = await api.getUserListings(UserID) // list of objects of type listings
        dispatch({ type: 'USER-LISTINGS', data })
    }
    catch (error) {
        if (error?.response?.status === 403) {
            dispatch({ type: 'LOGOUT' });
        }
        else {
            dispatch({ type: 'error', data: "Something went wrong" })
            return error;
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
        if (error?.response?.status === 403) {
            dispatch({ type: 'LOGOUT' });
        }
    }
}

export const getCurrentListing = (lID) => async (dispatch) => {
    try {
        const { data } = await api.getCurrentListing(lID)
        dispatch({ type: "CURRENT-LISTING", data })
    }
    catch (error) {
        if (error?.response?.status === 403) {
            dispatch({ type: 'LOGOUT' });
        }
    }
}


export const closeListing = (listing, history, recipient) => async (dispatch) => {

    try {
        //eslint-disable-next-line
        const { data } = await api.closeListing(listing, recipient);
        dispatch({ type: 'CLOSE-LISTING', data });
        history.push("/trade")
    } catch (error) {
        if (error?.response?.status === 403) {
            dispatch({ type: 'LOGOUT' });
        }
    }
}

export const deleteListing = (lID) => async (dispatch) => {

    try {
        const { data } = await api.deleteListing(lID);
        dispatch({ type: 'DELETE-LISTING', data });

    } catch (error) {
        if (error?.response?.status === 403) {
            dispatch({ type: 'LOGOUT' });
        }
    }

}

export const refreshListings = () => async (dispatch) => {
    console.log('here')
    try {

        const res = await api.refreshListings();
        if (res.status === 200)
            // console.log(res);
            dispatch({ type: 'success', data: res.data.message });
    }
    catch (error) {
        if (error?.response.status === 403) {
            dispatch({ type: 'LOGOUT' });
        }
        else {
            dispatch({ type: 'error', data: "Something went wrong" });
        }
    }
}