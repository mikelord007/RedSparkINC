import * as api from '../api/index.js';

export const fetchContacts = (UserID) => async (dispatch) => {
    try {
        const {data} = await api.fetchContacts(UserID);
        dispatch({ type: 'CONTACTS', data });

    } catch (error) {
        console.log(error);
    }
};