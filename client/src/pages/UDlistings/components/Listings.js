import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';
import { Icon } from '@iconify/react';
import { CircularProgress } from '@mui/material';
import { Alert, Snackbar } from '@mui/material';

import '../style.css';
import Listing from './Listing';
import { addNewContact } from '../../../actions/listing';
import Popup from '../../../components/Popup/Popup';
import useFetchListings from './useFetchListings';

const Listings = () => {
    
    const [activeLineState, setActiveLineState] = useState("left");
    const [allPageNumber, setAllPageNumber] = useState(0)
    const [upxPageNumber, setUpxPageNumber] = useState(0)
    const [fiatPageNumber, setFiatPageNumber] = useState(0)
    const all = useFetchListings(allPageNumber,'ALL')
    const upx = useFetchListings(upxPageNumber,'UPX')
    const fiat = useFetchListings(fiatPageNumber,'FIAT')


    const observer = useRef()
    const lastListElementRef = useCallback(node => {
    if (all.loading || upx.loading || fiat.loading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
        switch(activeLineState){
            case 'left':
                if (entries[0].isIntersecting && allPageNumber<=all.totalPages - 1) {
                    setAllPageNumber(prevPageNumber => prevPageNumber + 1)
                    console.log("active line: ",activeLineState, "pagenumber:", allPageNumber)
                    }
                break;
            case 'middle':
                if (entries[0].isIntersecting && upxPageNumber<=upx.totalPages - 1) {
                    setUpxPageNumber(prevPageNumber => prevPageNumber + 1)
                    console.log("active line: ",activeLineState, "pagenumber:", upxPageNumber)
                    }
                break;
            case 'right':
                if (entries[0].isIntersecting && fiatPageNumber<=fiat.totalPages - 1) {
                    setFiatPageNumber(prevPageNumber => prevPageNumber + 1)
                    console.log("active line: ",activeLineState, "pagenumber:", fiatPageNumber)
                    }
                break;
            default:
                if (entries[0].isIntersecting && allPageNumber<=all.totalPages - 1) {
                    setAllPageNumber(prevPageNumber => prevPageNumber + 1)
                    }
        }
    })
    if (node) observer.current.observe(node)
    }, [activeLineState, all.loading, all.totalPages, upx.loading, upx.totalPages, fiat.loading, fiat.totalPages, allPageNumber, fiatPageNumber, upxPageNumber])

    const alerts = useSelector((state) => state.alerts);
	const [open, setOpen] = useState(false)
	useEffect(() => {
		if (alerts.message) {
			setOpen(true)
		}
	}, [alerts])

    const [Listings, setListings] = useState(all.listings);
    const [currentListing, setCurrentListing] = useState();
    const [ping , setPing] = useState(false);
    const [dispArray, setdispArray] = useState([]);
    const UDlist = useRef();
    const history = useHistory();
    const activeLine = useRef();

    useEffect(() => {
        switch(activeLineState){
            case "left":
                setListings(all.listings);
                break;
            case "middle":
                setListings(upx.listings);
                break;
            case "right":
                setListings(fiat.listings);
                break;
            default:
                setListings(all.listings);
        }
    },[all.listings,upx.listings,fiat.listings,activeLineState])
    
    const changeCurr = (e) => {
       switch(e.target.getAttribute('name')){
        case "all": 
            activeLine.current.style.left = "0";
            setActiveLineState("left");
            setListings(all.listings);
            return;
        case "upx":
            activeLine.current.style.left = "33.3%";
            setActiveLineState("middle");
            setListings(upx.listings);
            return;
        case "fiat-crypto": 
            activeLine.current.style.left = "66.6%";
            setActiveLineState("right");
            setListings(fiat.listings);
            return;  
        default:
            activeLine.current.style.left = "0";
            setActiveLineState("left");
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
                    <div className="ping-text">{currentListing.rate} {currentListing.currency} per day per spark</div>
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


    const GreenBtnFnArgs = [currentListing,history]
    const currentUserID = JSON.parse(localStorage.getItem('profile'))?._id;

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
                {Listings?.map((listing,index) => {
                    if( Listings.length === index + 1){
                        return (<Listing key={listing._id} username={listing.user.name} rate={listing.rate} amount={listing.amount} minP={listing.minP} maxP={listing.maxP} currency={listing.currency} setPing={setPing} listing={listing} setCurrentListing={setCurrentListing} giveref={lastListElementRef}/>)
                    }
                    
                    else
                        return (<Listing key={listing._id} username={listing.user.name} rate={listing.rate} amount={listing.amount} minP={listing.minP} maxP={listing.maxP} currency={listing.currency} setPing={setPing} listing={listing} setCurrentListing={setCurrentListing} />)
                })}
                {(all.loading || upx.loading || fiat.loading)?
                        <div className="list-item loading-screen" >
                            <CircularProgress />
                         </div>
                        :null
                }
            </div>
            </div>
            {ping?
                <Popup dispArray={dispArray} CloseButtonFn={setPing} GreenBool={true} GreenBtnFn={addNewContact} GreenBtnFnArgs={GreenBtnFnArgs} GreenBtnContent={'Ping'} doDispatch={true} disableButton={currentUserID===currentListing.user.id?true:false}/>
            :null
            }
            <Snackbar
				open={open}
				autoHideDuration={3000}
				onClose={() => setOpen(false)}
			// action={action}
			>
				<Alert sx={{
					width: "100%",
					backgroundColor: "white",
					"& MuiPaper-root & MuiAlert-root": {
						padding: "0"
					}
				}
				}
					onClose={() => setOpen(false)}
					variant="outlined"
					severity={alerts.type} >
						{alerts.message}
						</Alert>
			</Snackbar>
            </>
        
    )
}

export default Listings;