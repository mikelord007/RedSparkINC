import dotenv from 'dotenv';
import userModel from '../models/User.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
// import {registerValidation} from './middleware/validation/

dotenv.config()
export const registerUser = async (req, res) => {
	const { name, email, uplandUsername, password, passwordConfirm } = req.body.form;

	try {
		console.log(req.body.form)
		const oldUser = await userModel.findOne({ email: email });
		if (oldUser) return res.status(400).json({ message: "Email already in use" })

		if (password != passwordConfirm) return res.status(400).json({ message: "Passwords do not match" })

		// TODO: add validation
		//add validation after this [joi]
		// const error = registerValidation(req.body);
		// TODO: add email confirmation 

		const hashedPassword = await bcrypt.hash(password, 12);

		// create a new user 
		const createdDate = new Date().toString()

		const user = new userModel({
			email: email,
			password: hashedPassword,
			name: name,
			uplandUsername: uplandUsername,
			created: createdDate,
			contacts: []
		});

		const savedUser = await user.save();
		return res.status(201).json({email:savedUser.email})

	}
	catch (error) {
		console.log(error);
		res.status(500).json({ message: "Something went wrong, please try again" });
		
	}
}


export const loginUser = async (req, res,next) => {
	const { email, password, rememberMe } = req.body;
	try {
		console.log("loging in")
		const user = await userModel.findOne({ email: email });
		// console.log(user)
		if (!user) return res.status(404).json({ message: "Invalid credentials" });

		if(user.verified === false){
			// console.log(user.verified)
			// res.locals.type = "VERIFICATION_PENDING";
			// return next();
			return res.status(401).json({message:"Not verified",email:email});
			// console.log(req.path)
			// res.redirect('../otp/get');
	}
		const {_id, uplandUsername, name} = user;
		const profile = {_id:_id,uplandUsername:uplandUsername,name:name};

		const isPasswordCorrect = await bcrypt.compare(password, user.password);

		if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });
		console.log('rest of login')
		const token = jwt.sign({ email: user.email, id: user._id, name: user.name, username: user.uplandUsername }, process.env.SECRET, { expiresIn: rememberMe ? "15d" : "1h" });
		res.status(200).json({ result: profile, token ,loggedIn:true});
	}
	catch (error) {
		console.log(error)
		res.status(400).json(error);
	}
}

export const resetPassword = async (req, res) => {
	const { password, passwordConfirm, email } = req.body;
	console.log(email)
	console.log(req.body)
	if (password != passwordConfirm) return res.status(400).json({ message: "Passwords do not match" })

	try {
		// TODO: add validation
		//add validation after this [joi]
		// const error = registerValidation(req.body);
		// TODO: add email confirmation 

		const hashedPassword = await bcrypt.hash(password, 12);
		console.log(req.body.form)
		const user = await userModel.findOne({ email: email });
		console.log(user)
		// update user password
		const updatedUser = await userModel.findOneAndUpdate({ email: email }, { password: hashedPassword }, { new: true });
		console.log(updatedUser)
		return res.status(200).json({ updatedUser });
	}
	catch (error) {
		res.status(500).json({ message: "Something went wrong, please try again" });
		console.log(error);
	}
}