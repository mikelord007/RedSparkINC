import mongoose from 'mongoose'

const ChatSchema = mongoose.Schema({
    from: {type: String, required: true},
    fromName: {type: String, required: true},
    to: {type: String, required: true},
    toName: {type: String, required: true},
    text:{type: String, required: true},
    uid: {type: String, required: true},
    msgtime: {type: Date, required: true}
})


export default mongoose.model("Chat",ChatSchema)