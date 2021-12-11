import React, { useEffect,useState } from "react";
import "../style.css";
import { useSelector } from 'react-redux';
import { Icon } from "@iconify/react";

import Popup from '../../../components/Popup/Popup';
import Trade from "./Trade";

const TradeHistory = () => {
    const trades = useSelector(state => {console.log(state.trades); return state.trades})
    const [tradePopup, setTradePopup] = useState(false)
    const [currentTrade, setCurrentTrade] = useState()
    const [dispArray, setdispArray] = useState([])
    

    useEffect(() => {

        if(currentTrade){
            const D = new Date(currentTrade.created)

        setdispArray([<div className="ping-date" key={0}>
                    <div className="ping-icon"><Icon icon="clarity:date-solid" color="black" width="32" /></div>
                    <div className="ping-text">{D.toLocaleDateString('pt-PT')}</div>
                </div>,
                <div className="ping-buyer" key={1}>
                    <div className="ping-icon"><Icon icon="bi:file-person-fill" color="black" width="32" /></div>
                    <div className="ping-text">{currentTrade.buyerName} (B)</div>
                </div>,
                <div className="ping-seller" key={2}>
                    <div className="ping-icon"><Icon icon="bi:file-person-fill" color="black" width="32" /></div>
                    <div className="ping-text">{currentTrade.sellerName} (S)</div>
                </div>,
                <div className="ping-rate" key={3}>
                    <div className="ping-icon"><Icon icon="bx:bx-transfer" color="black" width="40" /></div>
                    <div className="ping-text">{currentTrade.rate} per day per spark</div>
                </div>,
                <div className="ping-duration" key={4}>
                    <div className="ping-icon"><Icon icon="bi:clock-history" color="black" width="32" /></div>
                    <div className="ping-text">{currentTrade.minP?currentTrade.minP:0}-{currentTrade.maxP?currentTrade.maxP:`*`} days</div>
                </div>,
                <div className="ping-amount" key={5}>
                    <div className="ping-icon"><Icon icon="clarity:coin-bag-solid" color="black" width="32" /></div>
                    <div className="ping-text">{currentTrade.amount}</div>
                </div>,
                <div className="ping-burner" key={6}>
                    <div className="ping-icon"><Icon icon="ps:facebook-places" color="black" width="28" /></div>
                    <div className="ping-text">{currentTrade.burner}</div>
                </div>])
        }
},[currentTrade])

    return(
        <>
        <div id="UDtradehist">
                    <div id="tradehead">Trade History</div>
                    <div id="trade-main">
                   {trades?.map((trade,index) => (
                   <Trade key={index} count={index+1} date={trade.created} otherPerson={trade.buyerName} setTradePopup={setTradePopup} setCurrentTrade={setCurrentTrade} trade={trade}/>
                   ))}
                    </div>
        </div>
        {tradePopup?<Popup dispArray={dispArray} CloseButtonFn={setTradePopup} GreenBtnFn={setTradePopup} GreenBtnFnArgs={[false]} GreenBool={true} GreenBtnContent={'Ok'} doDispatch={false} height={"60%"}/>:null}
        </>
    )
}

export default TradeHistory;