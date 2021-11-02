export const chatReducer = (state = [], action) => {
    switch (action.type) {
        case 'CHATMSG':{
            console.log("herenow", action.data)
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
        case 'UPDATERECIPIENT':
            return action.userID
        default :
            return state
    }
} 