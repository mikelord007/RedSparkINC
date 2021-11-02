import React, {useState} from 'react'
import { Icon } from '@iconify/react';
import { TextField } from '@mui/material';

import UDfoot from '../../components/UDfoot/UDfoot'
import UDnav from '../../components/UDnav/UDnav'
import GreenBtn from '../../components/GreenBtn/GreenBtn';
import './style.css'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { createListing } from '../../actions/listing';

const listState = { currency: '', amount: '', rate: '', burner: '', minP: '', maxP: '' }
const UDcreatenew = () => {
    const [listing, setlisting] = useState(listState);
    const dispatch = useDispatch();
    const history = useHistory();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createListing(listing,history));
    }

    const handleChange = (e) => {
        setlisting({...listing, [e.target.name]:e.target.value})
    }

    return (
        <>
            <UDnav username="Nociphe" />
            <div id="UDcreatenew">
                <div id="active-list">
                    <header><h2>Active Listings</h2></header>
                    <div id="listing-box">
                        <div className="CN-listing">
                            <div className="CN-sn">1.</div>
                            <div className="CN-amount">4.26 upx</div>
                            <div className="CN-days">2-4 days</div>
                            <div className="CN-more"><button><Icon icon="bx:bx-dots-horizontal-rounded" color="black" height="34" /></button></div>
                        </div>
                        <div className="CN-listing">
                            <div className="CN-sn">2.</div>
                            <div className="CN-amount">5.2 upx</div>
                            <div className="CN-days">0-5 days</div>
                            <div className="CN-more"><button><Icon icon="bx:bx-dots-horizontal-rounded" color="black" height="34" /></button></div>
                        </div>
                    </div>
                </div>
                <div id="create-new">
                    <header><h2>CREATE NEW</h2></header>
                    <div id="creation-section">
                        <form autoComplete="off" noValidate action="" onSubmit={handleSubmit}>
                            <TextField className="CN-input" id="Currency" label="Currency" type="text" style={{}} variant="outlined" name="currency" onChange={handleChange} />
                            <TextField className="CN-input" id="Amount" label="Amount" type="text" variant="outlined" name="amount" onChange={handleChange} />
                            <TextField className="CN-input" id="Rate" label="Rate ( Per day Per spark )" type="text" variant="outlined" name="rate" onChange={handleChange} />
                            <TextField className="CN-input" id="Burner" label="Burner" type="text" variant="outlined" name="burner" onChange={handleChange} />
                            <TextField className="CN-input" id="Min" label="Min Period" type="text" variant="outlined" name="minP" onChange={handleChange} />
                            <TextField className="CN-input" id="Max" label="Max Period" type="text" variant="outlined" name="maxP" onChange={handleChange} />
                            <GreenBtn id="CN-submit" content={"create"} type="submit" />
                        </form>
                    </div>
                  
                </div>
            </div>
            <UDfoot />
        </>
    )
}

export default UDcreatenew;