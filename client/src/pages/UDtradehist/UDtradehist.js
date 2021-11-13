import React,{useEffect} from "react";
import { useDispatch,useSelector } from 'react-redux';
import {Redirect} from 'react-router-dom';

import UDfoot from '../../components/UDfoot/UDfoot'
import UDnav from '../../components/UDnav/UDnav';
import './style.css';
import TradeHistory from "./components/TradeHistory";
import { getTradeHist } from "../../actions/trade";

const UDtradehist = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTradeHist());
    },[dispatch]);
    const loggedIn = useSelector((state)=>state.auth.loggedIn);
    if (loggedIn === false)
    {return <Redirect to="/"/>}
    return(
        <>
            <UDnav username={`nochiphe`}/>
                <TradeHistory/>
            <UDfoot/>
        </>
    )
}

export default UDtradehist;