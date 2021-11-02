import React, {useState,useEffect} from 'react'

import { TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { createListing,getUserListings } from '../../actions/listing';

import UDfoot from '../../components/UDfoot/UDfoot'
import UDnav from '../../components/UDnav/UDnav'
import ActiveList from './components/ActiveList'
import GreenBtn from '../../components/GreenBtn/GreenBtn';

import './style.css'


const listState = { currency: '', amount: '', rate: '', burner: '', minP: '', maxP: '' }
const UDcreatenew = () => {
    const [listing, setlisting] = useState(listState);
    const dispatch = useDispatch();
    const history = useHistory();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createListing(listing,history));
    }

    useEffect(() => {

        dispatch(getUserListings(JSON.parse(localStorage.getItem('profile')).result._id))
    },[dispatch])


    const handleChange = (e) => {
        setlisting({...listing, [e.target.name]:e.target.value})
    }
    
    return (
        <>
            <UDnav username="Nociphe" />
            <div id="UDcreatenew">
                <ActiveList/>
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