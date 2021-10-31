import { addUser, removeUser, getUser, getUsersInRoom} from './IOhelperFns.js'

const socketHandler = (io) => {
    
    const handleEvents = (socket) => {
        socket.on('join', ({name,room}, callback) => {
            console.log("user has joined :)")
            const {error, user} = addUser({id: socket.id, name, room});
    
            if(error) return callback(error);
    
            socket.join(user.room)
    
            callback();
            
        })
    
    
        socket.on('sendMessage', (chatObj,callback) => {
            const user = getUser(socket.id);
            console.log("user is: ",user," message is: ", chatObj.text)
            io.to(user.room).emit('message',chatObj)
            // console.log("emitted message to all users in room: ",user.room)
            callback();
        })
    
        socket.on('disconnect', () => {
            console.log("user has left!!");
            const user = removeUser(socket.id)
    
            if(user) {
                io.to(user.room).emit('message',{user: 'admin', text: `${user.name} has left!`})
            }
        })
    }

    io.on("connection",handleEvents)
    
}

export default socketHandler;