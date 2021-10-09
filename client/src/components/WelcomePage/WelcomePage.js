import React from 'react';

import logoBig from './assets/logoBig.png';
import red_curve from './assets/red_curve.svg';
import mascot from './assets/mascot.svg';
import downArrow from './assets/downArrow.svg'
import './styles.css';

import Listing from './components/Listing';
import ToggleButton from './components/ToggleButton';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const WelcomePage = () => {
	// const styles = useStyles();

	return (
		<>
		<img className="logo" src={logoBig} alt="logo"/>
		<div className="container">
		<div className="welcome-message">
				<p>The  Best  Upland <br /> Exchange In<br /> The <br /> World.<br /><img src={red_curve} alt="red_curve" /> </p>
		</div>
		<img alt={'mascot'} className="mascot" src={mascot} />
		
			<div className="prompt1">Find People To<br/> Trade Spark Instantly !
			<img src={downArrow} alt="downArrow"  className="downArrow"/>	
		</div>
			<Listing/>
			<ToggleButton text1={'Signup'} text2={'Login'} />
				
			</div>
		</>
		)
}

export default WelcomePage;