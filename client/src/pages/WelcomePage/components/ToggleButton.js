import React from 'react';
import { NavLink } from 'react-router-dom';
import './WelcomeComponentsStyle.css';

const ToggleButton = () => {
	return (
		<div className="toggle-button" >
			<NavLink to={{ pathname: '/auth', state: false  }}><div className={'login'}>Login</div></NavLink>
			<NavLink to={{ pathname: '/auth', state: true }}><div className={'signup'}>Signup</div></NavLink>
		</div>
	)
}

export default ToggleButton;
