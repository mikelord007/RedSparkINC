import React,{useState,useEffect} from "react";
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/avatars-bottts-sprites';
import io from 'socket.io-client';
import { useDispatch } from 'react-redux';
import { fetchChat,fetchContacts } from "../../actions/chat";

import UDfoot from '../../components/UDfoot/UDfoot'
import UDnav from '../../components/UDnav/UDnav'
import ChatFooter from "./components/ChatFooter/ChatFooter";
import ChatHeader from "./components/ChatHeader/ChatHeader";
import ChatMain from "./components/ChatMain/ChatMain";
import ChatSideMenu from "./components/ChatSideMenu"

import './style.css'

let socket;
const currentUserID = JSON.parse(localStorage.getItem('profile')).result._id
const currentUserName = "peter"

const UDchat = (otherUser,otherUserName) => {
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    
    const ENDPOINT = 'http://localhost:5000'

    const dispatch = useDispatch()
    dispatch(fetchContacts(currentUserID));
    
    
    otherUser = 331
    otherUserName = "mike"
    const uid = otherUser<currentUserID?otherUser+currentUserID:currentUserID+otherUser

    useEffect(() => {
        dispatch(fetchChat(uid))
    },[dispatch,uid])

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
        socket.on('message',(chatObj) => {
            console.log(chatObj) //add to redux state
        })
    },[])

    const sendMessage = (event) => {
        event.preventDefault();

        if(message) {
            const chatObj = {text: message,to: otherUser,toName: otherUserName,from: currentUserID,fromName: currentUserName,uid: uid}
            socket.emit('sendMessage', chatObj, () => {setMessage('')});
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
            <ChatMain svgdice2={svgdice2} svgdicenociphe2={svgdicenociphe2} socket={socket} currentUserID={currentUserID}/>
            <ChatFooter message={message} setMessage={setMessage} sendMessage={sendMessage}/>
        </div>
        <UDfoot/>
        </>
    )
}

export default UDchat;