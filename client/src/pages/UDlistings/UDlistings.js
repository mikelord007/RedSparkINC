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
    // const loggedIn = useSelector((state)=>{console.log(state)});
    
    const dispatch = useDispatch();
    useEffect(() => {
        console.log('calling listings');
        dispatch(getListings());
    }, [dispatch]);
    if (loggedIn === false)
    {return <Redirect to="/"/>}
    return (
        <>
            <UDnav username={`Nociphe`} />
            <Listings />
            <UDfoot />
        </>
    )
}

export default UDlistings;