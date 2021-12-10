import React from 'react';
import LoginBox from './components/LoginBox';
import { Coin1, Coin2, Coin3, Coin4 } from '../../components/Coins/Coins';
import uplandlogo from './assets/uplandlogo.svg';

import './LoginPageStyle.css';

const SignupPage = () => {
	return (
		// <>
		<div className="login-temp">
			<span className="welcome">Hello!</span>
			<div className='login-container'>
				<img className='uplandlogo' src={uplandlogo} alt="nologo" />
				<LoginBox />
			</div>
			<Coin1 top="20%" right="83%" />
			<Coin2 top="50%" left="85%" />
			<Coin3 top="80%" left="75%" />
			<Coin3 top="80%" right="85%" />
			<Coin3 top="20%" left="80%" />
			<Coin3 top="40%" right="85%" />
			<Coin2 top="70%" left="50px" />
			<Coin4 top="83%" right="40%" />
			</div>
		// </>
	)
}
export default SignupPage