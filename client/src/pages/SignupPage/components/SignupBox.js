import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import CustomTextField from './CustomTextField';
import './SignupComponentsStyle.css';
import GreenBtn from '../../../components/GreenBtn/GreenBtn';
import { Link } from 'react-router-dom';

import { signup } from '../../../actions/auth';

const initialState = { name: '', email: '', uplandUsername: '', password: '', passwordConfirm: '' }
const SignupBox = () => {
	const [form, setForm] = useState(initialState);
	const dispatch = useDispatch();
	const history = useHistory();
	const handleSubmit = (e) => {
		e.preventDefault();
			dispatch(signup(form, history));
	};

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	}

	return (
		<div className="signupbox">
			<form autoComplete='off' noValidate action="" onSubmit={handleSubmit}>
				<CustomTextField label="Name" name="name" className={"textfield"} variant="outlined" margin="dense" color="primary" fullWidth onChange={handleChange} />
				<CustomTextField label="Email" name="email" className={"textfield"} variant="outlined" margin="dense" color="primary" fullWidth onChange={handleChange} />
				<CustomTextField label="Upland Username" name="uplandUsername" className={"textfield"} variant="outlined" margin="dense" color="primary" fullWidth onChange={handleChange} />
				<CustomTextField label="Password" name="password" className="textfield" variant="outlined" type="password" margin="dense" fullWidth onChange={handleChange} />
				<CustomTextField label="Confirm Password" name="passwordConfirm" className="textfield" variant="outlined" type="password" margin="dense" fullWidth onChange={handleChange} />
				<GreenBtn className="signup-button" content='Signup' type="submit" />
				<Link className="toggle-login" to="/login">Log In?</Link>
			</form>
		</div>
	)
}

export default SignupBox;
