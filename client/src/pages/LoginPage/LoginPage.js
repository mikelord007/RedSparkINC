import React from 'react';
import LoginBox from './components/LoginBox';
import { Coin1, Coin2, Coin3, Coin4 } from '../../components/Coins/Coins';
import uplandlogo from './assets/uplandlogo.svg';

import './LoginPageStyle.css';

const SignupPage = () => {
	return (
		<>
			<span className="welcome">Hello!</span>
			<div className='login-container'>
				<img className='uplandlogo' src={uplandlogo} alt="nologo" />
				<LoginBox />
			</div>
			<Coin1 top="30%" right="80%" />
			<Coin2 top="40%" left="85%" />
			<Coin3 top="80%" left="70%" />
			<Coin3 top="70%" left="3%" />
			<Coin3 top="20%" left="85%" />
			<Coin3 top="40%" right="90%" />
			<Coin4 top="70%" left="45%" />
			<Coin2 top="90%" left="30px" />
			<Coin4 top="90%" right="40%" />
		</>
	)
}
export default SignupPage