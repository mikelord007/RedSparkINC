import chatModel from '../models/Chat.js';
import User from '../models/User.js';
import {checkUserInContact} from '../controllers/io.js'


const updateLastMessage = async (userID,otherUserID,message,msgTime) => {

    const user = await User.findById(userID)
    user.contacts = user.contacts.map((contact) => { if (contact.id===otherUserID) { contact.lastMessage=message; contact.lastMsgTime = msgTime; return contact } else return contact } )

    await User.findByIdAndUpdate(userID, user)

}


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

            updateLastMessage(chatObj.from,chatObj.to,chatObj.text,chatObj.msgtime);
            updateLastMessage(chatObj.to,chatObj.from,chatObj.text,chatObj.msgtime);

        })
    
        socket.on('disconnect', () => {
            console.log("user has left!!");
        })
    }

    io.on("connection",handleEvents)
    
}

export default socketHandler;