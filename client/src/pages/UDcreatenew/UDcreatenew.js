import React, { useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { getUserListings } from '../../actions/listing';
import UDfoot from '../../components/UDfoot/UDfoot'
import UDnav from '../../components/UDnav/UDnav'
import ActiveList from './components/ActiveList'
import Creation from '../../components/Creation/Creation'


import './style.css'



const UDcreatenew = () => {
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserListings(JSON.parse(localStorage.getItem('profile'))?._id))
    },[dispatch])
    const loggedIn = useSelector((state)=>state.auth.loggedIn);
    if (loggedIn === false)
    {return <Redirect to="/"/>}
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