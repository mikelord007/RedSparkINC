import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import CustomTextField from './CustomTextField';
import './AuthComponentsStyle.css';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@mui/material';

import GreenBtn from '../../../components/GreenBtn/GreenBtn';
import { signup, login } from '../../../actions/auth';
import { Button } from '@material-ui/core';
import OtpInput from 'react-otp-input';
import { resetPass, verifyOTP as vOTP } from '../../../api';
import { getOTP } from '../../../actions/otp';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

const initialState = { name: '', email: '', uplandUsername: '', password: '', passwordConfirm: '', rememberMe: false }
const AuthBox = ({ signupState }) => {
	const [boxState, setBoxState] = useState(signupState ? signupState : "signup");
	// const [otpToggle, setOtpToggle] = useState(false);
	const [otp, setOtp] = useState({otp_code:"",type:""});
	const EnterOtp = (type) => {
		dispatch(getOTP({ email: form.email, type: type }));
		// setOtpToggle(true);
		setOtp({ ...otp, type: type })
		setBoxState("otp");
	}

	const errors = useSelector((state) => state.errors);
	const [open, setOpen] = useState(false)
	useEffect(()=>{
		if(errors.loginEr || errors.signupEr || errors.otp)setOpen(true)
	},[errors])
	const getEmail = () => {
		setBoxState("getEmail");
	}

	// const handleCheck = () => {
	// 	setForm({...form,rememberMe:!form.rememberMe});
	// }

	const switchMode = () => {
		setForm(initialState);
		setBoxState((prevState) => { if (["signup", "getEmail"].indexOf(prevState) === -1) return "signup"; else return "login" });
	};

	const [form, setForm] = useState(initialState);
	const dispatch = useDispatch();
	const history = useHistory();
	const verification_key = useSelector((state) => { return state.otp.verification_key });
	const handleLogin = (e) => {
		e.preventDefault();
		try {
			dispatch(login(form, history));
		} catch (error) {
			console.log('Error:' + error);
		}
	};

	const handleSignup = (e) => {
		e.preventDefault()
		const send = { form: form, otp: otp, verification_key: verification_key }
		dispatch(signup(send, history));
	}
	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	}
	const handleOtp = (code) => {
		setOtp({ ...otp, otp_code: code });
		console.log(otp)
	}
	const verifyOTP = async () => {
		console.log(verification_key)
		const verified = await vOTP({ otp: otp.otp_code, verification_key: verification_key, check: form.email });
		console.log(verified);
		if (verified.data.Status === "Success" && verified.status === 200 && otp.type === "RESET") {
			setBoxState("collectPass");
		}
		else if (verified.data.Status === "Success" && verified.status === 200 && otp.type === "VERIFICATION")
			handleSignup();
		else {
			// add error handling here
		}
	}
	const handleResetPass = () => {
		// dispatch(resetPass(form,history));
		resetPass(form);
		setBoxState("login");
	}
	return (

		<div className="signupbox">
			{(boxState === "login" || boxState === "signup") && (
				<>

					<form autoComplete='off' noValidate action="">
						{boxState === "signup" && (
							<>
								<CustomTextField label="Name" name="name" className={"textfield"} variant="outlined" margin="dense" color="primary" fullWidth onChange={handleChange} />
								<CustomTextField label="Upland Username" name="uplandUsername" className={"textfield"} variant="outlined" margin="dense" color="primary" fullWidth onChange={handleChange} />
								<CustomTextField label="Email" name="email" className={"textfield"} variant="outlined" margin="dense" color="primary" fullWidth onChange={handleChange} />
								<CustomTextField label="Password" name="password" className="textfield" variant="outlined" type="password" margin="dense" fullWidth onChange={handleChange} />
								<CustomTextField label="Confirm Password" name="passwordConfirm" className="textfield" variant="outlined" type="password" margin="dense" fullWidth onChange={handleChange} />
								<GreenBtn className="signup-button" content='Signup' onClick={(e) => handleSignup(e)} />
							</>
						)}

						{boxState === "login" &&
							<>
								<div>
									<CustomTextField label="Email" name="email" className={"textfield"} variant="outlined" margin="dense" color="primary" fullWidth onChange={handleChange} />
									<CustomTextField label="Password" name="password" className="textfield" variant="outlined" type="password" margin="dense" fullWidth onChange={handleChange} />
								</div>

								<Snackbar
									open={open}
									autoHideDuration={3000}
									onClose={()=>setOpen(false)}
								// action={action}
								>
									<Alert sx={{
										width: "100%",
										backgroundColor: "white",
										"& MuiPaper-root & MuiAlert-root": {
											padding: "0"
										}
									}
									}
										onClose={()=>setOpen(false)}
										variant="outlined"
										severity="error">{errors.loginEr}</Alert>
								</Snackbar>
								<FormControlLabel control={<Checkbox defaultChecked size="small" />} label="Remember Me" />
								<GreenBtn className="signup-button" content='Login' onClick={handleLogin} />
							</>
						}
						{boxState === "login" && (<Button id="toggle-button-auth" onClick={getEmail}>
							Forgot Password?
						</Button>)}
						<Button id="toggle-button-auth" onClick={switchMode}>
							{boxState === "signup" ? 'Log In?' : 'Sign Up?'}
						</Button>
					</form>
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
					<GreenBtn className="signup-button" content='Submit' onClick={() => verifyOTP()} />
				</>
			)}
			{boxState === "getEmail" && (<>
				<h3 className="email-prompt">Enter your email</h3>
				<CustomTextField label="Email" name="email" className={"textfield"} variant="outlined" margin="dense" color="primary" fullWidth onChange={handleChange} />
				<GreenBtn className="signup-button" content='Submit' onClick={() => EnterOtp("RESET")} />
				<Button onClick={switchMode}>
					Log in?
				</Button>
			</>)}
			{boxState === "collectPass" && (<>
				<h3 className="email-prompt">Create a new password</h3>
				<CustomTextField label="Password" name="password" className="textfield" variant="outlined" type="password" margin="dense" fullWidth onChange={handleChange} />
				<CustomTextField label="Confirm Password" name="passwordConfirm" className="textfield" variant="outlined" type="password" margin="dense" fullWidth onChange={handleChange} />
				<GreenBtn className="signup-button" content='Submit' onClick={handleResetPass} />
			</>)}
		</div>
	)
}

export default AuthBox;