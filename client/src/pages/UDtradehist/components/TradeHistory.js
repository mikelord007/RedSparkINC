import React, { useEffect } from "react";
import "../style.css";
import { useSelector } from 'react-redux';

import Trade from "./Trade";

const TradeHistory = () => {
    const trades = useSelector(state => {return state.trades})
    useEffect(()=>{
    },[trades]);
    return(
        <div id="UDtradehist">
                    <div id="tradehead">Trade History</div>
                    <div id="trade-main">
                   {trades?.map((trade,index) => (
                   <Trade key={index} count={index+1} date={trade.created} otherPerson={trade.buyerName}/>
                   ))}
                    </div>
                </div>
    )
}

export default TradeHistory;