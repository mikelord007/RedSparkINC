import React,{useState,useEffect} from "react";
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/avatars-bottts-sprites';
import io from 'socket.io-client';

import UDfoot from '../../components/UDfoot/UDfoot'
import UDnav from '../../components/UDnav/UDnav'
import ChatFooter from "./components/ChatFooter/ChatFooter";
import ChatHeader from "./components/ChatHeader/ChatHeader";
import ChatMain from "./components/ChatMain/ChatMain";

import './style.css'

let socket;
const currentUserID = "user" + Math.floor(Math.random() * (100 - 1) + 1).toString()

const UDchat = () => {
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    
    const ENDPOINT = 'http://localhost:5000'
    console.log(messages)
    
    
    useEffect(() => {

        const generateRoom = "talk"
        setRoom(generateRoom);
        
        socket = io(ENDPOINT);

        socket.emit('join',{name: currentUserID,room},(error) => {
            if(error) window.alert(error)
        })

        return () => {
            socket.off();
        }
    },[room]);

    useEffect(() => {

        socket.on('messaged',(message) => {
            setMessages([...messages,message])
        })

    })

    const sendMessage = (event) => {
        event.preventDefault();

        if(message) {
            socket.emit('sendMessage', message, () => {setMessage('')});
        }
    }

    let svgdice2 = createAvatar(style, {
        seed: 'Baconguy',
        dataUri: true,
        scale: 80
      });

    let svgdicenociphe2 = createAvatar(style, {
    seed: 'Nociphe',
    dataUri: true,
    scale: 80
    });

    return (
        <>
        <UDnav username={`Nochiphe`} />
        <div id="UDchat">
            <ChatHeader svgdice2={svgdice2}/>
            <ChatMain svgdice2={svgdice2} svgdicenociphe2={svgdicenociphe2} messages={messages} currentUserID={currentUserID}/>
            <ChatFooter message={message} setMessage={setMessage} sendMessage={sendMessage}/>
        </div>
        <UDfoot/>
        </>
    )
}

export default UDchat;