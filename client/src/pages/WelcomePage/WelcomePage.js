import React from 'react';

import logoBig from './assets/logoBig.png';
import red_curve from './assets/red_curve.svg';
import mascot from './assets/mascot.svg';
import downArrow from './assets/downArrow.svg'
import './WelcomePageStyle.css';

import Listing from './components/Listing';
import { Coin1, Coin2, Coin3, Coin4 } from '../../components/Coins/Coins';
import ToggleButton from './components/ToggleButton';


const WelcomePage = () => {
	// const styles = useStyles();

	return (
		<>
		<Coin1 top="330px" left="1px" />
		<Coin2 top="250px" left="300px" />
		<Coin3 top="500px" left="280px" />
		<Coin4 top="380px" left="150px" />
		<Coin4 top="600px" left="290px" />
		<Coin2 top="600px" left="30px" />
		<img className="logo" src={logoBig} alt="logo"/>
		<div className="welcome-container">
		<div className="welcome-message">
				<p>The  Best  Upland <br /> Exchange In<br /> The <br /> World.<br /><img src={red_curve} alt="red_curve" /> </p>
		</div>
		<img alt={'mascot'} className="mascot" src={mascot} />
		
			<div className="prompt1">Find People To<br/> Trade Spark Instantly !
			<img src={downArrow} alt="downArrow"  className="downArrow"/>	
		</div>
			<Listing/>
			<ToggleButton />
				
			</div>
		</>
		)
}

export default WelcomePage;