import * as api from '../api/index.js';

export const fetchContacts = (UserID) => async (dispatch) => {
    try {
        const {data} = await api.fetchContacts(UserID);
        console.log("fetch contacts", data)
        dispatch({ type: 'CONTACTS', data });

    } catch (error) {
        console.log(error);
    }
};


export const fetchChat = (uid) => async (dispatch) => {
    try{
        const {data} = await api.getChat(uid);

        dispatch({type: 'CHATMSG', data})
    } catch (error) {
        console.log(error);
    }
}

export const addNewMessages = (chatObj) => async (dispatch) => {
    try{
        
        dispatch({type: 'UPDATEMSG', chatObj})
    } catch (error) {
        console.log(error);
    }
}