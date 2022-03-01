import Joi from 'joi';

export const registerValidation = (req,res,next) => {
	const { name, email, uplandUsername, password, passwordConfirm } = req.body.form;
		
	const schema = Joi.object({
		name: Joi.string().required().messages({
			"string.empty":"Name is required"
		}),
		password: Joi.string().pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/).required().messages({
			"string.pattern.base":`IncorrectPassFormat`,
			"string.pattern.name":"IncorrectPassFormat",
			"string.empty":"Password is required",

		}),
		// passwordConfirm: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required,
		email: Joi.string().email().required().messages({
 			"string.email":"Not a valid email address",
			"string.empty":"Email is required"
		}),
		uplandUsername: Joi.string().min(3).max(20).required().messages({
			"string.empty":"Upland username is required",
			"string.min":"Upland username must be at least 5 characters long"
		}),
		// listings: Joi.array().items(
		// 		Joi.object({
		// 		currency: Joi.string().required,
		// 		rate: Joi.number().less(100).required,
		// 		amount: Joi.number().greater(0).required,
		// 		burner: Joi.string().required,
		// 		minP: Joi.number().required,
		// 		maxP: Joi.number().required,
		// 		active: Joi.boolean().required,
		// 		created: Joi.date().required,
		// 	})
			// )
	});

	const {error,value} = schema.validate({
		name:name,
		email:email,
		uplandUsername:uplandUsername,
		password:password,		
	});

	if(error)
		{
			// 
			console.log(error)
			console.log(error.context)
			// const response = {"Status":"Failure","Details": error.details[0].message}
			const response = {"message": error.details[0].message}
			return res.status(400).send(response);
		}
	else
	
		next();
}

export const passwordValidation = (req,res,next) => {
	
	const { password, passwordConfirm } = req.body;
		
	const schema = Joi.object({
		password: Joi.string().pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/).required().messages({
			"string.pattern.base":`IncorrectPassFormat`,
			"string.pattern.name":"IncorrectPassFormat",
			"string.empty":"Password is required",

		}),	
	});
	
	const {error,value} = schema.validate({
		password:password,		
	});

	if(error)
		{
			// 
			console.log(error)
			console.log(error.context)
			// const response = {"Status":"Failure","Details": error.details[0].message}
			const response = {"message": error.details[0].message}
			return res.status(400).send(response);
		}
	else
		next();
}
