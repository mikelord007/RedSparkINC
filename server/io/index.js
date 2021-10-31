import chatModel from '../models/Chat.js';

const socketHandler = (io) => {
    
    const handleEvents = (socket) => {
        socket.on('join', (room) => {
            console.log("user has joined :)")
            socket.join(room)
        })
    
    
        socket.on('sendMessage', (chatObj,callback) => {
            console.log("user is: ",chatObj.fromName," message is: ", chatObj.text)
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