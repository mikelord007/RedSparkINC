import chatModel from '../models/Chat.js';
import User from '../models/User.js';
import {checkUserInContact} from '../controllers/io.js'


const updateLastMessage = async (chatObj) => {
    const otherUser = await User.findById(chatObj.to)

    otherUser.contacts.map((contact) => { if (contact.id===chatObj.from) { contact.lastMessage=chatObj.text; contact.lastMsgTime = chatObj.msgtime; return contact } else return contact } )

    User.findByIdAndUpdate(chatObj.to, otherUser)
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

            updateLastMessage(chatObj);

        })
    
        socket.on('disconnect', () => {
            console.log("user has left!!");
        })
    }

    io.on("connection",handleEvents)
    
}

export default socketHandler;