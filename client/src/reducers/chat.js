export const chatReducer = (state = [], action) => {
    switch (action.type) {
        case 'CHATMSG':
            return [ action.data];
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