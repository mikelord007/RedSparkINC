import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import CustomTextField from './CustomTextField';
import './LoginComponentsStyle.css';
import GreenBtn from '../../../components/GreenBtn/GreenBtn';
import { Link } from 'react-router-dom';
import { login } from '../../../actions/auth';

const initialState = { email: '', password: '' }

const LoginBox = () => {
	const [form, setForm] = useState(initialState);
	const dispatch = useDispatch();
	const history = useHistory();
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(login(form, history));
	};

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	}

	return (
		<div className="loginbox">
			<form onSubmit={handleSubmit} autoComplete='off' noValidate action="">
				<CustomTextField label="Email" name="email" className="textfield" variant="outlined" margin="dense" color="green" fullWidth onChange={handleChange} />
				<CustomTextField label="Password" name="password" className="textfield" variant="outlined" type="password" margin="dense" fullWidth onChange={handleChange} />
				<GreenBtn className="login-button" content='Login' type="submit" />
			</form>
			<p className="toggle-signup">Don't have an account yet? <Link to="/signup">Signup</Link></p>
		</div>
	)
}

export default LoginBox;