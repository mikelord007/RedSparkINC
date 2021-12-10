export const tradesReducer = (trades = [], action) => {
    switch (action.type){
        case 'GET_TRADE_HIST':
            return action.payload;
        default: 
            return trades;
    }
}