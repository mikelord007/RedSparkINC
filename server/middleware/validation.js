import Joi from 'joi';

const registerValidation = (data) => {
	const schema = Joi.object({
		name: Joi.string().required,
		password: Joi.string().patter().required,
		email: Joi.email().required,
		uplandUsername: Joi.string().required,
		created: Joi.date().greater('now'),
		listings: Joi.array().items(
				Joi.object({
				currency: Joi.string().required,
				rate: Joi.number().less(100).required,
				amount: Joi.number().greater(0).required,
				burner: Joi.string().required,
				minP: Joi.number().required,
				maxP: Joi.number().required,
				active: Joi.boolean().required,
				created: Joi.date().required,
			})
			)
	});
	const {error,value} = schema.validate(data);
	if(error)
		return {error: error.details[0].message};
	else
		return null;
}

module.exports.registerValidation