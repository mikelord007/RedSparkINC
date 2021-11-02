import { Icon } from '@iconify/react'
import React from 'react'
import '../style.css'




const Listing = ({username,amount,currency,minP,maxP,rate}) => {
    return(
        <>
                <div className="list-item">
                    <div className="list-sub-item"> {username} </div>
                    <div className="list-sub-item">{rate} {currency}</div>
                    <div className="list-sub-item">{amount} Spark</div>
                    <div className="list-sub-item">{minP}-{maxP} d</div>
                    <div className="list-sub-item"><button><Icon icon="bx:bx-dots-horizontal-rounded" color="black" height="34" /></button></div>
                </div>
        </>
    )
}

export default Listing;