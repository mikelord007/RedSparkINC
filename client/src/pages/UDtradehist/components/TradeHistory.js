import React, { useEffect } from "react";
import "../style.css";
import { useSelector } from 'react-redux';

import Trade from "./Trade";

const TradeHistory = () => {
    const trades = useSelector(state => state.trades)
    useEffect(()=>{
    },[trades]);
    console.log(trades)
    return(
        <div id="UDtradehist">
                    <div id="tradehead">Trade History</div>
                    <div id="trade-main">
                   {trades?.map((trade,index) => (
                   <Trade key={index} count={index+1}  name={'name'} date={trade.date} />
                   ))}
                    </div>
                </div>
    )
}

export default TradeHistory;