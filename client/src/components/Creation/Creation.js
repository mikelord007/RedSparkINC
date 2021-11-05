import React,{useState} from 'react';
import { TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Icon } from '@iconify/react';

import { createListing } from '../../actions/listing';
import GreenBtn from '../../components/GreenBtn/GreenBtn';

const listState = { currency: '', amount: '', rate: '', burner: '', minP: '', maxP: '' }

const Creation = ({id, edit, buttonText, setEdit}) => {

    const [listing, setlisting] = useState(listState);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createListing(listing,history));
        e.target.reset();
    }

    const handleChange = (e) => {
        setlisting({...listing, [e.target.name]:e.target.value})
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
            <TextField className="CN-input" id="Currency" label="Currency" type="text" variant="outlined" name="currency" onChange={handleChange} />
            <TextField className="CN-input" id="Amount" label="Amount" type="text" variant="outlined" name="amount" onChange={handleChange} />
            <TextField className="CN-input" id="Rate" label="Rate ( Per day Per spark )" type="text" variant="outlined" name="rate" onChange={handleChange} />
            <TextField className="CN-input" id="Burner" label="Burner" type="text" variant="outlined" name="burner" onChange={handleChange} />
            <TextField className="CN-input" id="Min" label="Min Period" type="text" variant="outlined" name="minP" onChange={handleChange} />
            <TextField className="CN-input" id="Max" label="Max Period" type="text" variant="outlined" name="maxP" onChange={handleChange} />
            <GreenBtn id="CN-submit" content={buttonText} type="submit" />
        </form>
    )
}

export default Creation;