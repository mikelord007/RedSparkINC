import React from 'react';
import './styles.css';

const ToggleButton = ({text1,text2}) => {
	return (
		<div className="toggle-button" >
			<div className={'toggle-text1'} >{text1}</div>
			<div className={'toggle-text2'} >{text2}</div>
		</div>
	)
}

export default ToggleButton;
