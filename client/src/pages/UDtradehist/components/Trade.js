import React from 'react';
import { Icon } from '@iconify/react'


import "../style.css";

const Trade = ({date,count, otherPerson, setTradePopup, trade, setCurrentTrade}) => {
    const D = new Date(date)
    return(
        <div className="tradehis-item">
                        <div className="tradehis-sub-item">{count}.</div>
                        <div className="tradehis-sub-item">{D.toLocaleDateString('pt-PT')}</div>
                        <div className="tradehis-sub-item">{otherPerson}</div>
                        <div className="tradehis-sub-item"><button onClick={() => { setCurrentTrade(trade); setTradePopup(true)}}><Icon icon="bx:bx-dots-horizontal-rounded" color="black" height="34" /></button>
                        </div>
       </div>
    )
}

export default Trade;