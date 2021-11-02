import React from 'react';
import AuthBox from './components/AuthBox';
import { Coin1, Coin2, Coin3, Coin4 } from '../../components/Coins/Coins';
import uplandlogo from './assets/uplandlogo.svg';
import { useLocation } from 'react-router-dom'
import './AuthPageStyle.css';

const AuthPage = () => {
	const signupState = useLocation().state
	return (
		// <>
		<div className="signup-temp">
		<span className="welcome">Welcome</span>
			<div className='container'>
				<img className='uplandlogo' src={uplandlogo} alt="nologo" />
				<AuthBox signupState={signupState}/>
			
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
		// /* </> */
	)
}
export default AuthPage
