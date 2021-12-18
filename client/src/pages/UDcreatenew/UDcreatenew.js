import React, { useState, useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Icon } from '@iconify/react';

import { getUserListings,deleteListing } from '../../actions/listing';
import UDfoot from '../../components/UDfoot/UDfoot'
import UDnav from '../../components/UDnav/UDnav'
import ActiveList from './components/ActiveList'
import Creation from '../../components/Creation/Creation'
import Popup from '../../components/Popup/Popup';


import './style.css'



const UDcreatenew = () => {
    
    const dispatch = useDispatch();
    const [createPopup, setCreatePopup] = useState(false);
    const [dispArray, setdispArray] = useState([])
    const [currentListing, setCurrentListing] = useState();
    

    useEffect(() => {
        dispatch(getUserListings(JSON.parse(localStorage.getItem('profile'))?._id))
    },[dispatch])

    useEffect(() => {

        if(currentListing)
        setdispArray([<div className="ping-username" key={0}>
                    <div className="ping-icon"><Icon icon="bi:file-person-fill" color="black" width="32" /></div>
                    <div className="ping-text">{currentListing.user.name}</div>
                </div>,
                <div className="ping-rate" key={1}>
                    <div className="ping-icon"><Icon icon="bx:bx-transfer" color="black" width="40" /></div>
                    <div className="ping-text">{currentListing.rate +' '+ currentListing.currency} per day per spark</div>
                </div>,
                <div className="ping-duration" key={2}>
                    <div className="ping-icon"><Icon icon="bi:clock-history" color="black" width="32" /></div>
                    <div className="ping-text">{currentListing.minP?currentListing.minP:0}-{currentListing.maxP?currentListing.maxP:`*`} days</div>
                </div>,
                <div className="ping-amount" key={3}>
                    <div className="ping-icon"><Icon icon="clarity:coin-bag-solid" color="black" width="32" /></div>
                    <div className="ping-text">{currentListing.amount} sparks</div>
                </div>,
                <div className="ping-burner" key={4}>
                    <div className="ping-icon"><Icon icon="ps:facebook-places" color="black" width="28" /></div>
                    <div className="ping-text">{currentListing.burner?currentListing.burner:"NILL"}</div>
                </div>])
},[currentListing])

    const loggedIn = useSelector((state)=>state.auth.loggedIn);

    if (loggedIn === false)
    {return <Redirect to="/"/>}
    
    const username = JSON.parse(localStorage.getItem('profile')).uplandUsername
    const name = JSON.parse(localStorage.getItem('profile')).name

    return(
        <>
            <UDnav username={username} name={name}/>
            <div id="UDcreatenew">
                <ActiveList setCurrentListing={setCurrentListing} setCreatePopup={setCreatePopup} />
                <div id="create-new">
                    <header><h2>CREATE NEW</h2></header>
                    <div id="creation-section">
                        <Creation  buttonText={"create"}/>
                    </div>
                </div>
            </div>
            {createPopup?<Popup dispArray={dispArray} GreenBool={true} GreenBtnContent={'Delete'} doDispatch={true} CloseButtonFn={setCreatePopup} GreenBtnFn={deleteListing} GreenBtnFnArgs={[currentListing._id]}/>:null}
            <UDfoot />
        </>
    )
}

export default UDcreatenew;