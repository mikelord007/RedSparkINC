import * as api from '../api/index.js';

export const createTrade = (formData, router) => async (dispatch) => {
    try {

    }
    catch (error) {
        console.log(error);
        return error;
    }
}

export const getTradeHist = () => async (dispatch) => {
    try {
        const { data } = await api.getTradeHist();
        console.log(data)
        dispatch({ type: 'GET_TRADE_HIST', payload: data });
        return data;
    }
    catch (error) {
        console.log(error);
        return error;
    }
}