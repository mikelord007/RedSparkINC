import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';

import { currentGreenButton } from '../../actions/chat';
import { logout } from '../../actions/auth';
import './style.css'


const UDnav = ({username, name}) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout(history));
        dispatch(currentGreenButton(null));
    }
    return(
        <div id="ud-navbar">
            <div id="ud-initials">{name.split(" ").map((n)=>n[0]).join("")}</div>
            <div id="ud-user">{username}</div>
            <button onClick={handleLogout}><div id="ud-signout"></div></button>
        </div>
    )
}

export default UDnav;