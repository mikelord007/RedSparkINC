// import passport from 'passport-jwt';
import userModel from '../models/User.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
// import {registerValidation} from './middleware/validation/
const secret = "test";

export const registerUser = async (req,res) => {
	const { name ,email, password, uplandUsername} = req.body;

	try{
		const oldUser = await userModel.findOne({email: email});
		if (oldUser) return res.status(400).json({message: "Email already in use"})

		//add validation after this [joi]
		// const error = registerValidation(req.body);

		const hashedPassword = await bcrypt.hash(password, 12);

		 // create a new user 
		const createdDate = new Date().toString()

	  	const user = new userModel({
	  		email:email,
	  		password:hashedPassword,
	  		name:name,
	  		uplandUsername:uplandUsername,
	  		created: createdDate
	  	});

		const savedUser = await user.save();
		//console.log(savedUser)
		const token = jwt.sign({ email: savedUser.email, id: savedUser._id }, secret, { expiresIn: "1h" });
		return res.status(201).json({ savedUser, token: token })
		
	}
	catch(error){
		res.status(500).json({message: "Something went wrong, please try again"});
		console.log(error);
	}
}


export const loginUser =  async (req,res) => {
	const { name ,email, password, uplandUsername} = req.body;
	try{
		const oldUser = await userModel.findOne({email: email});
		if (oldUser) return res.status(400).json({message: "Email already in use"})

		//add validation after this [joi]
		// const error = registerValidation(req.body);

		const hashedPassword = await bcrypt.hash(password, 12);

		 // create a new user 
		const createdDate = new Date().toString()

	  	const user = new userModel({
	  		email:email,
	  		password:hashedPassword,
	  		name:name,
	  		uplandUsername:uplandUsername,
	  		created: createdDate
	  	});

		const savedUser = await user.save();
		console.log(savedUser)

		return res.status(201).json(savedUser);
	}
	catch(error){
		res.status(500).json({message: "Something went wrong, please try again"});
		console.log(error);
	}
}
