export const tradesReducer = (trades = [], action) => {
    switch (action.type){
        case 'GET_TRADE_HIST':
            return action.payload;
        // case 'CREATE':
        //     return [...listings, action.payload];
        default: 
            return trades;
    }
}