import React from 'react'

import './style.css'


const UDskeleton = ({username}) => {

    return(
        <div id="ud-navbar">
            <div id="ud-initials">ND</div>
            <div id="ud-user">{username}</div>
            <button><span class="iconify" data-icon="akar-icons:sign-out" style={{color: "black"}} data-flip="horizontal"></span></button>
        </div>
    )
}

export default UDskeleton;