import React,{useEffect} from 'react';


import logoBig from './assets/logoBig.png';
import red_curve from './assets/red_curve.svg';
import mascot from './assets/mascot.svg';
import downArrow from './assets/downArrow.svg';
import './WelcomePageStyle.css';
import BackImg from '../../assets/bg_img.png'

import Listing from './components/Listing';
import ToggleButton from './components/ToggleButton';


const WelcomePage = () => {
	
	useEffect(() => {
		const root = document.getElementById("root")
		root.style.background = `url(${BackImg})`

		return () => {
			root.style.background = ``
		}
	})

	return (
		<>
		<img className="logo" src={logoBig} alt="logo"/>
		<div className="welcome-container">
		<div className="hero-section">
			<div className="welcome-message">
					<p>The  Best  Upland <br /> Exchange In<br /> The <br /> World.<br /><img src={red_curve} alt="red_curve" /> </p>
			</div>
			<img alt={'mascot'} className="mascot" src={mascot} />
		</div>
		<div className="home-page-listing">
			<div className="home-listing-description"> Find People To Trade Spark Instantly ! </div>
			<img src={downArrow} alt="downArrow"  className="downArrow"/>	
			<Listing/>
			<ToggleButton />
		</div>
		</div>		
		</>
		)
}

export default WelcomePage;