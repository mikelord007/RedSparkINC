import React from 'react'

import './style.css'


const UDnav = ({username}) => {

    return(
        <div id="ud-navbar">
            <div id="ud-initials">ND</div>
            <div id="ud-user">{username}</div>
            <button><div id="ud-signout"></div></button>
        </div>
    )
}

export default UDnav;