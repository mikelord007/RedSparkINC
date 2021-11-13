import React,{useEffect} from 'react';
import { useLocation } from 'react-router-dom'


import AuthBox from './components/AuthBox';
import uplandlogo from './assets/uplandlogo.svg';
import './AuthPageStyle.css';
import BackImg from '../../assets/bg_img.png'
import { Coin1, Coin2, Coin3, Coin4 } from '../../components/Coins/Coins';


const AuthPage = () => {
	const signupState = useLocation().state
	useEffect(() => {
		const root = document.getElementById("root")
		root.style.background = `url(${BackImg})`

		return () => {
			root.style.background = ``
		}
	})
	return (
		<>
		<Coin1 top="10%" left="20%" width="3rem"/>
		<Coin2 top="10%" right="5%" width="4rem"/>
		<Coin3 top="30%" left="4%" width="5rem"/>
		<Coin4 top="0%" left="30%"/>
		<Coin1 top="50%" left="30%"/>
		<Coin2 top="60%" left="3%"/>
		<Coin3 top="82%" left="30%"/>
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
