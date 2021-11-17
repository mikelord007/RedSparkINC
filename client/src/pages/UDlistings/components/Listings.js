import React, { useState, useEffect, useRef } from 'react';
import { useSelector} from 'react-redux';
import { useHistory } from "react-router-dom";
import { addNewContact } from '../../../actions/listing';
import { Icon } from '@iconify/react';


import '../style.css';
import Listing from './Listing';
import Popup from '../../../components/Popup/Popup';

const Listings = () => {

    const allListings = useSelector((state) => state.listings.listings);
    const [Listings, setListings] = useState(allListings);
    const [currentListing, setCurrentListing] = useState();
    const [ping , setPing] = useState(false)
    const [dispArray, setdispArray] = useState([])
    const UDlist = useRef();
    const history = useHistory();
    const activeLine = useRef();

    useEffect(() => {
        setListings(allListings);
    },[allListings])
    
    const changeCurr = (e) => {
       switch(e.target.getAttribute('name')){
        case "all": 
            activeLine.current.style.left = "0";
            setListings(allListings);
            return;
        case "upx": 
            activeLine.current.style.left = "33.3%";
            setListings(allListings.filter((listing => listing.currency === "UPX")));
            return;
        case "fiat-crypto": 
            activeLine.current.style.left = "66.6%";
            setListings(allListings.filter((listing => listing.currency !== "UPX")));
            return;  
        default:
            activeLine.current.style.left = "0";
       }
       
    }
    useEffect(() => {
        if(ping)
        UDlist.current.style.filter="blur(1px)"
        else
        UDlist.current.style.filter="blur(0)"
    }, [ping])

    useEffect(() => {

        if(currentListing)
        setdispArray([<div className="ping-username" key={0}>
                    <div className="ping-icon"><Icon icon="bi:file-person-fill" color="black" width="32" /></div>
                    <div className="ping-text">{currentListing.user.name}</div>
                </div>,
                <div className="ping-rate" key={1}>
                    <div className="ping-icon"><Icon icon="bx:bx-transfer" color="black" width="40" /></div>
                    <div className="ping-text">{currentListing.rate} per day per spark</div>
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
                    <div className="ping-text">{currentListing.burner}</div>
                </div>])
},[currentListing])


    const GreenBtnFnArgs = [currentListing,history]

    return (
        <>
        <div ref={UDlist} id="UDlistings">
            <div  id="listings-head">
                <div id="head-line"><div id="active-line" ref={activeLine}></div></div>
                <div onClick={changeCurr} name="all" className="head-item">
                    All
                </div>
                <div onClick={changeCurr} className="head-item" name="upx">
                    UPX
                </div>
                <div onClick={changeCurr} className="head-item" name="fiat-crypto">
                    Fiat-Crypto
                </div>
            </div>
            <div id="listings-main">
                {Listings?.map((listing) => (
                    <Listing key={listing._id} username={listing.user.name} rate={listing.rate} amount={listing.amount} minP={listing.minP} maxP={listing.maxP} currency={listing.currency} setPing={setPing} listing={listing} setCurrentListing={setCurrentListing}/>
                ))}
            </div>
            </div>
            {ping?
                <Popup dispArray={dispArray} CloseButtonFn={setPing} GreenBool={true} GreenBtnFn={addNewContact} GreenBtnFnArgs={GreenBtnFnArgs} GreenBtnContent={'Ping'} doDispatch={true} />
            :null
            }
            </>
        
    )
}

export default Listings;