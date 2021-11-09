import React,{useState} from 'react';
import { TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Icon } from '@iconify/react';
// import { useSelector } from 'react-redux';

import { createListing, closeListing } from '../../actions/listing';
import GreenBtn from '../../components/GreenBtn/GreenBtn';

// let listingDefault;
const Creation = ({id, edit, buttonText, setEdit, listState, autofill}) => {
    
    const defaultListing = { currency: '', amount: '', rate: '', burner: '', minP:'', maxP: '' }
    const [listing, setlisting] = useState(listState?listState:defaultListing);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!listState)
        dispatch(createListing(listing,history));
        else
        dispatch(closeListing(listing,history))

        e.target.reset();
    }

    const handleChange = (e) => {
        setlisting({...listing, [e.target.name]: e.target.value})
    }

    return(
        <form id={id} autoComplete="off" noValidate action="" onSubmit={handleSubmit}>
            { edit?
                <>
                <Icon onClick={() => {setEdit(false)}} icon="carbon:close-filled" color="#444444" height="32" />
                <h1>Close Trade</h1>
                </>
                :
                null
            }
            <TextField className="CN-input" value={listing.currency} id="Currency" label="Currency" type="text" variant="outlined" name="currency" onChange={handleChange} />
            <TextField className="CN-input" value={listing.amount} id="Amount" label="Amount" type="text" variant="outlined" name="amount" onChange={handleChange} />
            <TextField className="CN-input" value={listing.rate} id="Rate" label="Rate ( Per day Per spark )" type="text" variant="outlined" name="rate" onChange={handleChange} />
            <TextField className="CN-input" value={listing.burner} id="Burner" label="Burner" type="text" variant="outlined" name="burner" onChange={handleChange} />
            <TextField className="CN-input" value={listing.minP} id="Min" label="Min Period" type="text" variant="outlined" name="minP" onChange={handleChange} />
            <TextField className="CN-input" value={listing.maxP} id="Max" label="Max Period" type="text" variant="outlined" name="maxP" onChange={handleChange} />
            <GreenBtn id="CN-submit" content={buttonText} type="submit" />
        </form>
    )
}

export default Creation;