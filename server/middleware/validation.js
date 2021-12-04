import Joi from 'joi';

export const registerValidation = (req,res,next) => {
	const { name, email, uplandUsername, password, passwordConfirm } = req.body.form;
	try{
		console.log('hello')
	const schema = Joi.object({
		name: Joi.string().required,
		password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required,
		passwordConfirm: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required,
		email: Joi.string().email().required,
		uplandUsername: Joi.string().min(5).max(20).required,
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
		passwordConfirm:passwordConfirm,		
	});

	// if(error)
	// 	return {error: error.details[0].message};
	// else
		next();
}
catch(error){
	console.log(error.details[0].message);
	const response = { "Status": "Failure", "Details": error.details[0].message }
    return res.status(400).send(response);
}
}

