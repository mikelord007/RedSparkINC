import React from 'react'
import { Icon } from '@iconify/react';

import GreenBtn from '../GreenBtn/GreenBtn'
import './style.css'


const UDfoot = () => {
    const createicon = <Icon icon="gridicons:create" height="20" color="black" /> 
    const listing = <Icon icon="bi:list-stars" height="20" color="black" /> 
    const chat = <Icon icon="ci:chat" height="20" color="black" />
    const history = <Icon icon="fluent:history-16-filled" height="20" color="black" /> 


    return(
        <div id="ud-footer">
            <GreenBtn to="/create" content={createicon}/>
            <GreenBtn to="/" content={listing}/>
            <GreenBtn to="/chat" content={chat}/>
            <GreenBtn to="/trade" content={history}/>
        </div>
    )
}

export default UDfoot;