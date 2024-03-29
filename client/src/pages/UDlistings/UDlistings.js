import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UDfoot from '../../components/UDfoot/UDfoot';
import UDnav from '../../components/UDnav/UDnav';
import Listings from './components/Listings';
import './style.css';



const UDlistings = () => {
    const loggedIn = useSelector((state)=>state.auth.loggedIn);
    
    if (loggedIn === false)
    {return <Redirect to="/"/>}

    const username = JSON.parse(localStorage.getItem('profile')).uplandUsername
    const name = JSON.parse(localStorage.getItem('profile')).name

    return(
        <>
            <UDnav username={username} name={name}/>
            <Listings />
            <UDfoot />
        </>
    )
}

export default UDlistings;