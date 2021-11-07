
import userModel from '../models/User.js'
import chatModel from '../models/Chat.js';

export const getContacts = async (req, res) => {

	const { id } = req.params;
	try {
		
		const data = await userModel.findOne({_id: id},'contacts')
		console.log("contacts are:", data)
		return res.status(200).json(data)
	}
	
	catch (error) {
		res.status(500).json({ message: "Something went wrong, please try again" });
		console.log(error);
	}
}

export const getChat = async (req, res) => {

	const { uid } = req.params;
	try {
		
		const chat  = await chatModel.find({uid: uid})
		// console.log("chat messages are:", chat)
		return res.status(200).json(chat)
	}
	
	catch (error) {
		res.status(500).json({ message: "Something went wrong, please try again" });
		console.log(error);
	}
}