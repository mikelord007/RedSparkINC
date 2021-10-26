import React from 'react';
import CustomTextField  from './CustomTextField';
import './LoginComponentsStyle.css';
import GreenBtn from '../../../components/GreenBtn/GreenBtn';
import {Link} from 'react-router-dom';

const LoginBox = () => {
	return (
	<div className="loginbox"> 
	<form autoComplete='off' noValidate action="">
	<CustomTextField  label="Email" name="Email" className="textfield" variant="outlined"  margin="dense" color="green" fullWidth />		
	<CustomTextField label="Password" name="Password1" className="textfield" variant="outlined" type="password" margin="dense" fullWidth />
	<GreenBtn className="login-button" content='Login' />
	</form>
	<p className="toggle-signup">Don't have an account yet? <Link to="/signup">Signup</Link></p>
	</div>
		)
}

export default LoginBox;