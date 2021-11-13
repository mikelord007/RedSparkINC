import React,{useState} from 'react';
import { TextField, Select, InputLabel,MenuItem, FormControl } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Icon } from '@iconify/react';

import { createListing, closeListing } from '../../actions/listing';
import GreenBtn from '../../components/GreenBtn/GreenBtn';


const Creation = ({id, edit, buttonText, setEdit, listState}) => {
    
    const defaultListing = { currency: '', amount: '', rate: '', burner: '', minP:'', maxP: '' }
    const [listing, setlisting] = useState(listState?listState:defaultListing);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
        console.log("fucking here")
        e.preventDefault();

        if(!listState)
        dispatch(createListing(listing,history));
        else
        dispatch(closeListing(listing,history))

        e.target.reset();
    }

    const handleChange = (e) => {
        setlisting({...listing, [e.target.name]: e.target.value})
        console.log(listing)
    }
    const handleChangeForDropdown = (e) => {
        setlisting({...listing,currency: e.target.value})
        console.log(listing)
    }

    return(
        <form className="form-wrapper" onSubmit={handleSubmit} >
        <FormControl fullWidth id={id} autoComplete="off" noValidate action="" >
            { edit?
                <>
                <Icon onClick={() => {setEdit(false)}} icon="carbon:close-filled" color="#444444" height="32" />
                <h1>Close Trade</h1>
                </>
                :
                null
            }
            <InputLabel id="currency-selection-label" >Currency</InputLabel>
                <Select
                    labelId="currency-selection-label"
                    id="currency-selection"
                    label="Currency"
                    onChange={handleChangeForDropdown}
                    value={listing.currency}
                >
                    <MenuItem value={"UPX"}>UPX</MenuItem>
                    <MenuItem value={"BTC"}>BTC</MenuItem>
                    <MenuItem value={"OTHER"}>OTHER</MenuItem>
                </Select>
            <div className="form-element">
            <TextField  value={listing.amount} id="Amount" label="Amount" type="text" variant="outlined" name="amount" onChange={handleChange} />
            </div>
            <div className="form-element">
            <TextField  value={listing.rate} id="Rate" label="Rate ( Per day Per spark )" type="text" variant="outlined" name="rate" onChange={handleChange} />
            </div>
            <div className="form-element">
            <TextField  value={listing.burner} id="Burner" label="Burner" type="text" variant="outlined" name="burner" onChange={handleChange} />
            </div>
            <div className="form-element">
            <TextField  value={listing.minP} id="Min" label="Min Period" type="text" variant="outlined" name="minP" onChange={handleChange} />
            </div>
            <div className="form-element">
            <TextField  value={listing.maxP} id="Max" label="Max Period" type="text" variant="outlined" name="maxP" onChange={handleChange} />
            </div>
            <GreenBtn id="CN-submit" content={buttonText} type="submit" />
        </FormControl>
        </form>
    )
}

export default Creation;