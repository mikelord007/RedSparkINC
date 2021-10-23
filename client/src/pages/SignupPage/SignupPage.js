import React from 'react';
import SignupBox from './components/SignupBox';
import { Coin1, Coin2, Coin3, Coin4 } from '../../components/Coins/Coins';
import uplandlogo from './assets/uplandlogo.svg';

import './SignupPageStyle.css';

const SignupPage = () => {
	return (
		<>
		<span className="welcome">Welcome</span>
			<div className='container'>
				<img className='uplandlogo' src={uplandlogo} alt="nologo" />
				<SignupBox />
			
			</div>
			<Coin1 top="20%" right="83%" />
			<Coin2 top="50%" left="85%" />
			<Coin3 top="80%" left="75%" />
			<Coin3 top="80%" right="85%" />
			<Coin3 top="20%" left="80%" />
			<Coin3 top="40%" right="85%" />
			<Coin2 top="90%" left="30px" />
			<Coin4 top="90%" right="40%" />
		</>
	)
}
export default SignupPage
