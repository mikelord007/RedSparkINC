import React, { useEffect} from 'react'
import { useDispatch } from 'react-redux';

import { getUserListings } from '../../actions/listing';
import UDfoot from '../../components/UDfoot/UDfoot'
import UDnav from '../../components/UDnav/UDnav'
import ActiveList from './components/ActiveList'
import Creation from '../../components/Creation/Creation'


import './style.css'



const UDcreatenew = () => {
    
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(getUserListings(JSON.parse(localStorage.getItem('profile')).result._id))
    },[dispatch])
    
    
    return (
        <>
            <UDnav username="Nociphe" />
            <div id="UDcreatenew">
                <ActiveList/>
                <div id="create-new">
                    <header><h2>CREATE NEW</h2></header>
                    <div id="creation-section">
                        <Creation  buttonText={"create"}/>
                    </div>
                </div>
            </div>
            <UDfoot />
        </>
    )
}

export default UDcreatenew;