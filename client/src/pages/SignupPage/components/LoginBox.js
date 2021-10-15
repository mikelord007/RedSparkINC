import React from 'react';
import CustomTextField  from './CustomTextField';
import './SignupComponentsStyle.css';

const LoginBox = () => {
	return (
	<div className="loginbox"> 
	<form autoComplete='off' noValidate action="">
	<CustomTextField  label="Email" name="Email" className={"textfield"} variant="outlined"  margin="dense" color="green" fullWidth />		
	<CustomTextField label="Password" name="Password1" className="textfield" variant="outlined" type="password" margin="dense" fullWidth />
	<CustomTextField label="Confirm Password" name="Password1" className="textfield" variant="outlined" type="password" margin="dense" fullWidth />
	</form>
	</div>
		)
}

export default LoginBox;