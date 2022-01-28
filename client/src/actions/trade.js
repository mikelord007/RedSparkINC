import * as api from '../api/index.js';


export const getTradeHist = () => async (dispatch) => {
    try {
        const { data } = await api.getTradeHist();
        dispatch({ type: 'GET_TRADE_HIST', payload: data });
        return data;
    }
    catch (error) {
        console.log(error) //remove this in prod
        if (error?.response?.status === 403){
            dispatch({type:'LOGOUT'});
        }   
    }
}