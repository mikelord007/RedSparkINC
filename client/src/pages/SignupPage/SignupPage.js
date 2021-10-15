import React from 'react';
import LoginBox from './components/LoginBox';
import Greenbtn from '../../components/GreenBtn/GreenBtn';
import {Coin1,Coin2,Coin3,Coin4} from '../../components/Coins/Coins';
import uplandlogo from './assets/uplandlogo.svg';

import './SignupPageStyle.css';

const SignupPage = () => {
return (
<>
<p className="welcome">	<span >Welcome</span></p>
<div className='container'>
	<img className='uplandlogo' src={uplandlogo} alt="nologo" />
	<LoginBox />
	<Greenbtn text='Signup' />
	</div>
	<Coin1 top="330px" left="1px" />
	<Coin2 top="250px" left="300px" />
	<Coin3 top="500px" left="280px" />
	<Coin4 top="380px" left="150px" />
	<Coin4 top="600px" left="290px" />
	<Coin2 top="600px" left="30px" />
	</>
	)
	}
	export default SignupPage