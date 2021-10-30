import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import '../style.css';
import Listing from './Listing';




const Listings = () => {
    const listings = useSelector((state) => { return state.listings.listings });
    useEffect(() => {
    }, [listings])
    return (
        <div id="UDlistings">
            <div id="listings-head">
                <div id="head-line"><div id="active-line"></div></div>
                <div className="head-item">
                    All
                </div>
                <div className="head-item">
                    UPX
                </div>
                <div className="head-item">
                    Fiat-Crypto
                </div>
            </div>
            <div id="listings-main">
                {listings?.map((listing) => (
                    <Listing key={listing._id} username={listing.user.name} rate={listing.rate} amount={listing.amount} minP={listing.minP} maxP={listing.maxP} currency={listing.currency} />
                ))}
            </div>
        </div>
    )
}

export default Listings;