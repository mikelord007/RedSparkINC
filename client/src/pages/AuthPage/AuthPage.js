import React,{useEffect} from 'react';
import { useLocation } from 'react-router-dom'


import AuthBox from './components/AuthBox';
import uplandlogo from './assets/uplandlogo.svg';
import './AuthPageStyle.css';
import BackImg from '../../assets/bg_img.png'
import { Coin1, Coin2, Coin3, Coin4 } from '../../components/Coins/Coins';


const AuthPage = () => {
	const signupState = useLocation().state;
	console.log(signupState)
	useEffect(() => {
		const root = document.getElementById("root")
		root.style.background = `url(${BackImg})`

		return () => {
			root.style.background = ``
		}
	})
	return (
		<>
		<Coin1 bottom="5%" right="6%" width="5rem"/>
		<Coin2 top="7%" right="5%" width="4rem"/>
		<Coin3 top="40%" right="1%" width="5rem"/>
		<Coin4 top="5%" left="5%" width="3rem"/>
		<Coin1 top="50%" left="1%" width="4rem" />
		<Coin2 top="30%" left="1%"width="3rem" />
		<Coin3 bottom="5%" left="1%"width="5rem"/>
		<div className="signup-temp" >
		<span className="welcome">Welcome</span>
			<div className='container'>
				<img className='uplandlogo' src={uplandlogo} alt="nologo" />
				<AuthBox signupState={signupState}/>
			
			</div>
		</div>
		</>
	)
}
export default AuthPage
