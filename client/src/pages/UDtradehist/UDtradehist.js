import React,{useEffect} from "react";
import { useDispatch } from 'react-redux';

import UDfoot from '../../components/UDfoot/UDfoot'
import UDnav from '../../components/UDnav/UDnav'
import './style.css'
import TradeHistory from "./components/TradeHistory";
import { getTradeHist } from "../../actions/trade";

const UDtradehist = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTradeHist());
    },[dispatch]);
    return(
        <>
            <UDnav username={`nochiphe`}/>
                <TradeHistory/>
            <UDfoot/>
        </>
    )
}

export default UDtradehist;