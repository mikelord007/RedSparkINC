import chatModel from '../models/Chat.js';
import {checkUserInContact} from '../controllers/io.js'


const socketHandler = (io) => {
    
    const handleEvents = (socket) => {
        socket.on('join', (room) => {
            console.log("user has joined :)")
            socket.join(room)
        })
    
    
        socket.on('sendMessage', (chatObj, recipient, callback) => {
            let confirmInContacts = false

            if(!confirmInContacts){
                checkUserInContact(chatObj, recipient)
                confirmInContacts = true
            }

            // console.log("user is: ",chatObj.fromName," message is: ", chatObj.text)
            // console.log("chatobj: ", chatObj)
            chatObj.msgtime = new Date()
            const newUpload = new chatModel(chatObj)
            newUpload.save();
            io.to(newUpload.uid).emit('message',newUpload)
            callback(newUpload);
        })
    
        socket.on('disconnect', () => {
            console.log("user has left!!");
        })
    }

    io.on("connection",handleEvents)
    
}

export default socketHandler;