import { Button } from '@material-ui/core';
import { Alert, Snackbar } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import CloseIcon from '@mui/icons-material/Close';
import FormControlLabel from '@mui/material/FormControlLabel';
import React, { useEffect, useRef, useState } from 'react';
import OtpInput from 'react-otp-input';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login, signup,resetPass } from '../../../actions/auth';
import * as otp_1 from '../../../actions/otp';
import {  verifyOTP as vOTP } from '../../../api';
import GreenBtn from '../../../components/GreenBtn/GreenBtn';
import './AuthComponentsStyle.css';
import CustomTextField from './CustomTextField';

const AuthBox = ({ signupState }) => {
	const dispatch = useDispatch();
	const initialState = { name: '', email: '', uplandUsername: '', password: '', passwordConfirm: '', rememberMe:  true}
	const [boxState, setBoxState] = useState(signupState ? signupState : "signup");
	const otp_email = useSelector((state)=>{return state.auth.email;})
	const [otp, setOtp] = useState({ otp_code: "", type: "" });
	const EnterOtp = (e,type) => {
		e.preventDefault();
		if(type === "VERIFICATION")
		dispatch(otp_1.getOTP({ email: otp_email, type: type }));
		else 
	{
		dispatch(otp_1.getOTP({email:form.email,type:type}))}
		// setOtpToggle(true);
		setOtp({ ...otp, type: type })
		setBoxState("otp");
	}

	const handleCheckbox = (e) => {
		setForm({...form,rememberMe:e.target.checked});
	}

	//alerts
	const alerts = useSelector((state) => {return state.alerts;});
	const [open, setOpen] = useState(false)
	useEffect(() => {
		if (!alerts.displayed) {
			setOpen(true)
		}
	},[alerts.displayed])
	const handleClose = (event) => {
		dispatch({type:"noAlert"});
		setOpen(false);
	}

	const action = (
		<Button color="inherit" size="small" onClick={handleClose}>
      <CloseIcon fontSize='small'/>
		</Button>
    )

	const firstRender = useRef(true)
	useEffect(() => {
		if(firstRender.current) //to check for first render
		{
			firstRender.current = false;
		}
		else
		{
			if (alerts.message  === "Signup successful"||alerts.message === "Not verified") {
				setBoxState("otp");
				setOtp(o => ({...o,type:"VERIFICATION"}))
			}

			if(alerts.message === "Password updated")
			setBoxState("login");
		}
	}, [alerts])

	const getEmail = () => {
		setBoxState("getEmail");
	}

	const [form, setForm] = useState(initialState);

	const switchMode = () => {
		setForm(initialState);
		setBoxState((prevState) => { if (["signup", "getEmail"].indexOf(prevState) === -1) return "signup"; else return "login" });
	};
	const history = useHistory();
	const verification_key = useSelector((state) => { return state.otp.verification_key });
	
	const handleLogin = (e) => {
		e.preventDefault();
		dispatch(login(form,history));
	};

	const handleSignup = (e) => {
		e.preventDefault()
		const send = { form: form }
		dispatch(signup(send, history));
	}
	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	}
	const handleOtp = (code) => {
		setOtp({ ...otp, otp_code: code });
	}

	const verifyOTP = async (e) => {
		e.preventDefault();
		try {
			const verified = await vOTP({ otp: otp.otp_code, verification_key: verification_key, check: otp.type === "VERIFICATION"?otp_email:form.email,type:otp.type });
		if (verified.data.Status === "Success" && verified.status === 200 && verified.data.type === "RESET") {
			setBoxState("collectPass");
		}
		else if (verified.data.Status === "Success" && verified.status === 200 && verified.data.type === "VERIFICATION")
			setBoxState("login");
			dispatch({type:"success",data:"Verified"});
		}
		catch(error) {
			dispatch({type:'error',data:error.response?.data.erMsg});
		}
	}
	const handleResetPass = (e) => {
		e.preventDefault();
		dispatch(resetPass(form,history));
		
	}

	
	return (

		<div className="signupbox">
			{(boxState === "login" || boxState === "signup") && (
				<>

					
						{boxState === "signup" && (
							<>
								<CustomTextField label="Name" name="name" className={"textfield"} variant="outlined" margin="dense" color="primary" fullWidth onChange={handleChange} />
								<CustomTextField label="Upland Username" name="uplandUsername" className={"textfield"} variant="outlined" margin="dense" color="primary" fullWidth onChange={handleChange} />
								<CustomTextField label="Email" name="email" className={"textfield"} variant="outlined" margin="dense" color="primary" fullWidth onChange={handleChange} />
								<CustomTextField label="Password" name="password" className="textfield" variant="outlined" type="password" margin="dense" fullWidth onChange={handleChange} />
								<CustomTextField label="Confirm Password" name="passwordConfirm" className="textfield" variant="outlined" type="password" margin="dense" fullWidth onChange={handleChange} />
								<GreenBtn className="signup-button" content='Signup' onClick={handleSignup} />
							</>
						)}

						{boxState === "login" &&
							<>
								<div>
									<CustomTextField label="Email" name="email" className={"textfield"} variant="outlined" margin="dense" color="primary" fullWidth onChange={handleChange} />
									<CustomTextField label="Password" name="password" className="textfield" variant="outlined" type="password" margin="dense" fullWidth onChange={handleChange} />
								</div>
								<FormControlLabel control={<Checkbox checked={form.rememberMe} size="small" onChange={handleCheckbox} />} label="Remember Me" />
								<GreenBtn className="signup-button" content='Login' onClick={handleLogin} />
							</>
						}
						{boxState === "login" && (<Button className="toggle-button-auth" onClick={getEmail}>
							Forgot Password?
						</Button>)}
						<Button className="toggle-button-auth" onClick={switchMode}>
							{boxState === "signup" ? 'Log In?' : 'Sign Up?'}
						</Button>
					
				</>
			)}
			{boxState === "otp" && (
				<>
					<div className="otp-headline">Please enter OTP sent to your mail</div>
					<div id="otp-box">
						<OtpInput
							value={otp.otp_code}
							onChange={handleOtp}
							numInputs={6}
							separator={<span> - </span>}
						/>
					</div>
					<GreenBtn className="signup-button" content='Submit' onClick={verifyOTP} />
				</>
			)}
			{boxState === "getEmail" && (<>
			{/* <form> */}
				<h3 className="email-prompt">Enter your email</h3>
				<CustomTextField label="Email" name="email" className={"textfield"} variant="outlined" margin="dense" color="primary" fullWidth onChange={handleChange} />
				<GreenBtn className="signup-button" content='Submit' onClick={(e) => EnterOtp(e,"RESET")} />
				<Button onClick={switchMode}>
					Log in?
				</Button>
			{/* </form> */}
			</>)}
			{boxState === "collectPass" && (<>
			
				<h3 className="email-prompt">Create a new password</h3>
				<CustomTextField label="Password" name="password" className="textfield" variant="outlined" type="password" margin="dense" fullWidth onChange={handleChange} />
				<CustomTextField label="Confirm Password" name="passwordConfirm" className="textfield" variant="outlined" type="password" margin="dense" fullWidth onChange={handleChange} />
				<GreenBtn className="signup-button" content='Submit' onClick={(e)=>handleResetPass(e)} />
			
			</>)}
			<Snackbar
				open={open}
				autoHideDuration={3000}
				onClose={handleClose}
			action={action}
			>
				<Alert sx={{
					width: "100%",
					backgroundColor: "white",
					"& MuiPaper-root & MuiAlert-root": {
						padding: "0"
					}
				}
				}
					onClose={handleClose}
					variant="outlined"
					severity={alerts.type} 
					action={action}
					>
						{alerts.message==='IncorrectPassFormat'?
						<div id="incorrectPass">
							<div>
								Password must be atleast 8 characters and contain:
							</div>
							<div>
								one lowercase
							</div>
							<div>
								one uppercase
							</div>
							<div>
								one number
							</div>
							<div>
								one special case
							</div>
						</div>
						:alerts.message}
						</Alert>
			</Snackbar>
		</div>
	)
}

export default AuthBox;