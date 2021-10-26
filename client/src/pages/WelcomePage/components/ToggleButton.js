import React from 'react';
import './WelcomeComponentsStyle.css';
import { Link } from 'react-router-dom';

const ToggleButton = ({text1,text2}) => {
	return (
		<div className="toggle-button" >
			<Link to={'/signup'}><div className={'toggle-text1'} >{text1}</div></Link>
			<Link to={'/login'}><div className={'toggle-text2'} >{text2}</div></Link>
		</div>
	)
}

export default ToggleButton;
