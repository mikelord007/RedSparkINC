
import userModel from '../models/User.js'
// import chatModel from '../models/Chat.js';

export const getContacts = async (req, res) => {

	const { id } = req.params;
	try {
		
		const contacts = await userModel.findOne({_id: id},'contacts')
		console.log("contacts are:", contacts)
		return res.status(200).json({contacts: {contacts}})
	}
	
	catch (error) {
		res.status(500).json({ message: "Something went wrong, please try again" });
		console.log(error);
	}
}