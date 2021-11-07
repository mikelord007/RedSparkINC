import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
	name : {type: String, required: true},
	email : {type: String, required: true},
	password : {type: String, required: true},
	uplandUsername : {type: String, required: true},
	created: { type: Date, default: Date.now },
	contacts: []
})

export default mongoose.model("User", userSchema);

// listings: [
// 	{ 
//   currency: String,
//    rate: Number,
// 	amount: Number,
// 	burner: String,
//    minP: Number,
//    maxP: Number,
//   active: Boolean,
//   created: Date
//  }
// ]