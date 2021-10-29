import React, { useEffect } from 'react'
import { Icon } from '@iconify/react'
import {useDispatch} from 'react-redux'
import { getListings } from '../../actions/listing'

import UDfoot from '../../components/UDfoot/UDfoot'
import UDnav from '../../components/UDnav/UDnav'
import './style.css'



const listings = ({username,amount,currency,}) => {
const dispatch = useDispatch()

    return(
        <>
                <div className="list-item">
                    <div className="list-sub-item"> {username} </div>
                    <div className="list-sub-item">{rate} {currency}</div>
                    <div className="list-sub-item">{amount} Spark</div>
                    <div className="list-sub-item">2-7 d</div>
                    <div className="list-sub-item"><button><Icon icon="bx:bx-dots-horizontal-rounded" color="black" height="34" /></button></div>
                </div>
        </>
    )
}

export default UDlistings;