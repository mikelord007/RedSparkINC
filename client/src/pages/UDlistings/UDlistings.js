import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getListings } from '../../actions/listing';
import UDfoot from '../../components/UDfoot/UDfoot';
import UDnav from '../../components/UDnav/UDnav';
import Listings from './components/Listings';
import './style.css';



const UDlistings = () => {
    const loggedIn = useSelector((state)=>state.auth.loggedIn);
    
    const dispatch = useDispatch();
    useEffect(() => {
        // console.log('calling listings');
        dispatch(getListings());
    }, [dispatch]);
    if (loggedIn === false)
    {return <Redirect to="/"/>}

    const username = JSON.parse(localStorage.getItem('profile')).uplandUsername

    return (
        <>
            <UDnav username={username} />
            <Listings />
            <UDfoot />
        </>
    )
}

export default UDlistings;