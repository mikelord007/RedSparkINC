import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getListings } from '../../actions/listing';
import UDfoot from '../../components/UDfoot/UDfoot';
import UDnav from '../../components/UDnav/UDnav';
import Listings from './components/Listings';
import './style.css';



const UDlistings = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getListings());
    }, [dispatch])
    return (
        <>
            <UDnav username={`Nociphe`} />
            <Listings />
            <UDfoot />
        </>
    )
}

export default UDlistings;