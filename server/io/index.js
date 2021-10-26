import { addUser, removeUser, getUser, getUsersInRoom} from './io/IOhelperFns.js'

const socketHandler = (socket) => {
    
        socket.on('join', ({name,room}, callback) => {
            console.log("user has joined :)")
            const {error, user} = addUser({id: socket.id, name, room});
    
            if(error) return callback(error);
    
            socket.join(user.room)
    
            callback();
            
        })
    
    
        socket.on('sendMessage', (message,callback) => {
            const user = getUser(socket.id);
            console.log("user is: ",user," message is: ", message)
            io.to(user.room).emit('messaged',{user: user.name, text: message})
            console.log("emitted message to all users in room: ",user.room)
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

export default socketHandler;