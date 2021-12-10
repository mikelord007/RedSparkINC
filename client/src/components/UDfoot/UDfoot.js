import React from 'react'
import { Icon } from '@iconify/react';
import {Link} from 'react-router-dom'

import GreenBtn from '../GreenBtn/GreenBtn'
import './style.css'


const UDfoot = () => {
    const createicon = <Icon icon="gridicons:create" height="20" color="black" /> 
    const listing = <Icon icon="bi:list-stars" height="20" color="black" /> 
    const chat = <Icon icon="ci:chat" height="20" color="black" />
    const history = <Icon icon="fluent:history-16-filled" height="20" color="black" /> 


    return(
        <div id="ud-footer">
            <Link to={'/create'}><GreenBtn to="/create" content={createicon}/></Link>
            <Link to={'/listings'}><GreenBtn to="/" content={listing}/></Link>
            <Link to={'/chat'}><GreenBtn to="/chat" content={chat}/></Link>
            <Link to={'/trade'}><GreenBtn to="/trade" content={history}/></Link>
        </div>
    )
}

export default UDfoot;