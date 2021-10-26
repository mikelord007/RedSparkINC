// import passport from 'passport-jwt';
import userModel from '../models/User.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
// import {registerValidation} from './middleware/validation/
const secret = "test";

export const registerUser = async (req, res) => {
	const { name, email, uplandUsername, password, passwordConfirm } = req.body;

	try {
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
			created: createdDate
		});

		const savedUser = await user.save();
		//console.log(savedUser)
		const token = jwt.sign({ email: savedUser.email, id: savedUser._id }, secret, { expiresIn: "1h" });
		return res.status(201).json({ savedUser, token: token })

	}
	catch (error) {
		res.status(500).json({ message: "Something went wrong, please try again" });
		console.log(error);
	}
}


export const loginUser = async (req, res) => {
	const { email, password } = req.body;
	try {
		const user = await userModel.findOne({ email: email });
		if (!user) return res.status(404).json({ message: "Invalid credentials" })

		//add validation after this [joi]
		// const error = registerValidation(req.body);

		const isPasswordCorrect = await bcrypt.compare(password, user.password);

		if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

		const token = jwt.sign({ email: user.email, id: user._id }, secret, { expiresIn: "1h" });

		res.status(200).json({ result: user, token });
	}
	catch (error) {
		res.status(500).json({ message: "Something went wrong, please try again" });
		console.log(error);
	}
}
