import React from 'react';
import { Link,NavLink } from 'react-router-dom';
import './WelcomeComponentsStyle.css';

const ToggleButton = () => {
	return (
		<div className="toggle-button" >
			<NavLink to='/login'><div className={'login'}>Login</div></NavLink>
			<NavLink to='/signup'><div className={'signup'}>Signup</div></NavLink>
		</div>
	)
}

export default ToggleButton;
