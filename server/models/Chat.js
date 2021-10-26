import mongoose from 'mongoose'

const ChatSchema = mongoose.Schema({
    from: {type: mongoose.Types.ObjectId, required: true},
    to: {type: mongoose.Types.ObjectId, required: true},
    message:{type: String, required: true},
    uid: {type: String, required: true},
    msgtime: {type: Date, required: true}
})


export default mongoose.model("Chat",ChatSchema)