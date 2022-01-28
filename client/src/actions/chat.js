import * as api from '../api/index.js';

export const fetchContacts = (UserID) => async (dispatch) => {
    try {
        const {data} = await api.fetchContacts(UserID);
        dispatch({ type: 'CONTACTS', data });

    } catch (error) {
        console.log(error) //remove this in prod
        if (error.response?.status === 403){
            dispatch({type:'LOGOUT'});
        }   
    }
};


export const updateRecipient = (elem) => async ( dispatch) => {
    dispatch({type: 'UPDATE_RECIPIENT', elem})
}

export const fetchChat = (uid) => async (dispatch) => {
    try{
        const {data} = await api.getChat(uid);
        // console.log("this is that", data)
        dispatch({type: 'CHATMSG', data})

    } catch (error) {
        console.log(error) //remove this in prod
        if (error.response?.status === 403){
            dispatch({type:'LOGOUT'});
        }   
    }
}

export const addNewMessages = (chatObj) => async (dispatch) => {
    try{
        
        dispatch({type: 'UPDATEMSG', chatObj})
    } catch (error) {
        console.log(error);
    }
}

export const currentGreenButton = (grnbtn) => async (dispatch) => {
    try{
        dispatch({type: 'UPDATEGRNBTN', grnbtn})
    }
    catch (error) {
        console.log(error);
    }
}