import React,{useEffect} from 'react';
import { useLocation } from 'react-router-dom'


import AuthBox from './components/AuthBox';
import uplandlogo from './assets/uplandlogo.svg';
import './AuthPageStyle.css';
import BackImg from '../../assets/bg_img.png'
import { Coin1, Coin2, Coin3, Coin4 } from '../../components/Coins/Coins';


const AuthPage = () => {
	const signupState = useLocation().state;
	const initialHeight = "100%";
	console.log(initialHeight)
	useEffect(() => {
		const root = document.getElementById("root")
		root.style.background = `url(${BackImg})`

		return () => {
			root.style.background = ``
		}
	})
	return (
		<>
		<Coin1 bottom="-7%" right="-30%" width="16rem"/>
		<Coin1 top="50%" left="2%" width="4rem" />
		<Coin1 top="20%" left="70%" width="4rem" />
		<Coin2 top="30%" left="1%" width="3rem" />
		<Coin2 top="10%" right="50%" width="3rem" />
		<Coin2 top="-8%" right="5%" width="4rem"/>
		<Coin2 bottom="8%" right="50%" width="4rem"/>
		<Coin3 top="50%" right="-8%" width="6rem"/>
		<Coin3 bottom="3%" left="-9%" width="8rem"/>
		<Coin4 top="5%" left="-5%" width="3rem"/>
		<Coin4 top="5%" right="5%" width="2rem"/>
		<div className="signup-temp" >
		<span className="welcome">Welcome</span>
		<div className="auth-wrapper">
			<div className='container'>
				<img className='uplandlogo' src={uplandlogo} alt="nologo" />
				<form>
				<AuthBox signupState={signupState}/>
				</form>
			</div>
		</div>
		</div>
		</>
	)
}
export default AuthPage
