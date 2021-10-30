export const chatReducer = (state = [], action) => {
    switch (action.type) {
        case 'CONTACTS':
            return { ...state, contacts: action.data };
        default:
            return state;
    }
};