import React from 'react';
import { useHistory } from 'react-router';
import { logout } from '../../actions/auth';
import { useDispatch } from 'react-redux';
import './style.css'


const UDnav = ({username}) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout(history));
    }
    return(
        <div id="ud-navbar">
            <div id="ud-initials">ND</div>
            <div id="ud-user">{username}</div>
            <button onClick={handleLogout}><div id="ud-signout"></div></button>
        </div>
    )
}

export default UDnav;