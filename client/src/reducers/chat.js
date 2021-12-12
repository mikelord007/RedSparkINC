export const chatReducer = (state = [], action) => {
    switch (action.type) {
        case 'CHATMSG':{
            return action.data;
        }
        case 'UPDATEMSG':
            return [ ...state, action.chatObj]
        default:
            return state;
    }
};

export const contactsReducer = ( state = [], action) => {
    switch(action.type) {
        case 'CONTACTS':
            return action.data.contacts;
        
        default:
            return state;
    }
}

export const Recipient = (state = {}, action) => {
    switch (action.type) {
        case 'UPDATE_RECIPIENT':
            return action.elem
        case 'NEW-CONTACT':
            return action.data;
        default :
            return state;
    }
}

export const GButton = ( state = null, action) => {
    switch(action.type){
        case 'UPDATEGRNBTN':
            return action.grnbtn;
        default: 
            return state
    }
}   