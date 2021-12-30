import React from 'react'
import { Icon } from '@iconify/react'
import '../style.css'




const Listing = ({username,amount,currency,minP,maxP,rate, setPing, listing, setCurrentListing, giveref}) => {


    return(
        <>
                <div className="list-item" ref={giveref}>
                    <div className="list-sub-item name"> {username} </div>
                    <div className="list-sub-item currency">{rate} {currency}</div>
                    <div className="list-sub-item amount">{amount} Spark</div>
                    <div className="list-sub-item period">{minP}-{maxP} d</div>
                    <div className="list-sub-item ButtonIcon"><button onClick={() => {setCurrentListing(listing); setPing(true)}}><Icon icon="bx:bx-dots-horizontal-rounded" color="black" height="34" /></button></div>
                </div>
        </>
    )
}

export default Listing;