import React from 'react';
import CustomTextField  from './CustomTextField';
import './SignupComponentsStyle.css';
import GreenBtn from '../../../components/GreenBtn/GreenBtn';
// import {Button} from '@material-ui/core';
import {Link} from 'react-router-dom';
const LoginBox = () => {
	return (
	<div className="loginbox"> 
	<form autoComplete='off' noValidate action="">
	<CustomTextField  label="Email" name="Email" className={"textfield"} variant="outlined"  margin="dense" color="green" fullWidth />		
	<CustomTextField label="Password" name="Password1" className="textfield" variant="outlined" type="password" margin="dense" fullWidth />
	<CustomTextField label="Confirm Password" name="Password1" className="textfield" variant="outlined" type="password" margin="dense" fullWidth />
	<GreenBtn className="signup-button" content='Signup' />
	<p className="toggle-login" disabled>Already have an account?<Link to="/login">Log In</Link></p>
	</form>
	</div>
		)
}

export default LoginBox;
