import React, { useState, useEffect, useRef } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Icon } from '@iconify/react';
import { useHistory } from "react-router-dom";
import { addNewContact } from '../../../actions/listing';

import '../style.css';
import Listing from './Listing';
import GreenBtn from '../../../components/GreenBtn/GreenBtn'

const Listings = () => {

    const allListings = useSelector((state) => {  return state.listings.listings });
    const [Listings, setListings] = useState(allListings);
    const [currentListing, setCurrentListing] = useState();
    const UDlist = useRef();
    const [ping , setPing] = useState(false)
    const history = useHistory();
    const dispatch = useDispatch();
    const activeLine = useRef();
    const changeCurr = (e) => {
       switch(e.target.getAttribute('name')){
        case "all": 
            activeLine.current.style.left = "0";
            console.log('all')
            return;
        case "upx": 
            activeLine.current.style.left = "33.3%";
            console.log('upx')
            setListings(allListings.filter((listing => listing.currency === "UPX")));
            return;
        case "fiat-crypto": 
            activeLine.current.style.left = "66.6%";
            console.log('fiat')
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
                <div id="listing-ping">
                <Icon onClick={() => setPing(false)} icon="carbon:close-filled" color="black" width="32" />
                <div className="ping-username">
                    <div className="ping-icon"><Icon icon="bi:file-person-fill" color="black" width="32" /></div>
                    <div className="ping-text">{currentListing.user.name}</div>
                </div>
                <div className="ping-rate">
                    <div className="ping-icon"><Icon icon="bx:bx-transfer" color="black" width="40" /></div>
                    <div className="ping-text">{currentListing.rate} per day per spark</div>
                </div>
                <div className="ping-duration">
                    <div className="ping-icon"><Icon icon="fa-solid:calendar-day" color="black" width="32" /></div>
                    <div className="ping-text">{currentListing.minP?currentListing.minP:0}-{currentListing.maxP?currentListing.maxP:`*`} days</div>
                </div>
                <div className="ping-amount">
                    <div className="ping-icon"><Icon icon="clarity:coin-bag-solid" color="black" width="32" /></div>
                    <div className="ping-text">{currentListing.amount} sparks</div>
                </div>
                <div className="ping-burner">
                    <div className="ping-icon"><Icon icon="ps:facebook-places" color="black" width="28" /></div>
                    <div className="ping-text">{currentListing.burner}</div>
                </div>
                <GreenBtn content={'Ping'} id={'ping-button'} onClick={() => { dispatch(addNewContact(currentListing,history))} }/>
            </div>
            :null
            }
            </>
        
    )
}

export default Listings;