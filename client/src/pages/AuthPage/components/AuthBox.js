import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import CustomTextField from './CustomTextField';
import './AuthComponentsStyle.css';
import GreenBtn from '../../../components/GreenBtn/GreenBtn';

import { signup, login } from '../../../actions/auth';
import { Button } from '@material-ui/core';

const initialState = { name: '', email: '', uplandUsername: '', password: '', passwordConfirm: '' }
const SignupBox = () => {
	const [isSignup, setisSignup] = useState(true)
	const switchMode = () => {
		setForm(initialState);
		setisSignup((prevIsSignup) => !prevIsSignup);
	};
	const [form, setForm] = useState(initialState);
	const dispatch = useDispatch();
	const history = useHistory();
	const handleSubmit = (e) => {
		e.preventDefault();
		if (isSignup) {
				const s = dispatch(signup(form, history));
				console.log(s)
		}
		else {
			try{
			dispatch(login(form, history));
			}catch(error){
				
				console.log('this is the error:' + error);
			}
		}
	};

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	}

	return (
		<div className="signupbox">
			<form autoComplete='off' noValidate action="" onSubmit={handleSubmit}>
				{isSignup && (
					<>
						<CustomTextField label="Name" name="name" className={"textfield"} variant="outlined" margin="dense" color="primary" fullWidth onChange={handleChange} />
						<CustomTextField label="Upland Username" name="uplandUsername" className={"textfield"} variant="outlined" margin="dense" color="primary" fullWidth onChange={handleChange} />
					</>
				)}
				<CustomTextField label="Email" name="email" className={"textfield"} variant="outlined" margin="dense" color="primary" fullWidth onChange={handleChange} />
				<CustomTextField label="Password" name="password" className="textfield" variant="outlined" type="password" margin="dense" fullWidth onChange={handleChange} />
				{isSignup && <CustomTextField label="Confirm Password" name="passwordConfirm" className="textfield" variant="outlined" type="password" margin="dense" fullWidth onChange={handleChange} />}				
				<GreenBtn className="signup-button" content={ isSignup ? 'Signup':'Login'} type="submit" />
				<Button onClick={switchMode}>
					{isSignup ? 'Log In?':'Signin'}
				</Button>
			</form>
		</div>
	)
}

export default SignupBox;
