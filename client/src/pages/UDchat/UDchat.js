import React,{useState,useEffect} from "react";
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/avatars-bottts-sprites';
import io from 'socket.io-client';
import { useDispatch,useSelector } from 'react-redux';
import { fetchChat,fetchContacts,addNewMessages } from "../../actions/chat";


import UDfoot from '../../components/UDfoot/UDfoot'
import UDnav from '../../components/UDnav/UDnav'
import ChatFooter from "./components/ChatFooter/ChatFooter";
import ChatHeader from "./components/ChatHeader/ChatHeader";
import ChatMain from "./components/ChatMain/ChatMain";
import ChatSideMenu from "./components/ChatSideMenu/ChatSideMenu";

import './style.css'

let socket;
const currentUserID = JSON.parse(localStorage.getItem('profile')).result._id
const currentUserName = "peter"

const UDchat = (otherUserName) => {
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    
    const dispatch = useDispatch()
    const ENDPOINT = 'http://localhost:5000'

    
    useEffect(() => {
        dispatch(fetchContacts(currentUserID));
    },[dispatch])
    
    const otherUser = useSelector((state) => state.Recipient)
    const sideMenuState = useState(false);
    
    otherUserName = "mike"
    const uid = otherUser<currentUserID?otherUser+currentUserID:currentUserID+otherUser
    console.log("uid is", uid)

    useEffect(() => {
        dispatch(fetchChat(uid))
    },[dispatch,uid]) //maybe take this to root component

    useEffect(() => {
        
        setRoom(uid);
        socket = io(ENDPOINT);
        socket.emit('join',room)

        return () => {
            socket.off();
        }
    },[room,uid]);

    useEffect(() => {
        socket.on('message',(chatObj) => {
            console.log(chatObj)
            dispatch(addNewMessages(chatObj))
        })
    },[dispatch])

    const sendMessage = (event) => {
        event.preventDefault();

        if(message) {
            const chatObj = {text: message,to: otherUser,toName: otherUserName,from: currentUserID,fromName: currentUserName,uid: uid}
            socket.emit('sendMessage', chatObj, (chatObj) => {setMessage(''); dispatch(addNewMessages(chatObj)) });
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
            <ChatHeader sideMenuState={sideMenuState} svgdice2={svgdice2}/>
            <ChatMain sideMenuState={sideMenuState} svgdice2={svgdice2} svgdicenociphe2={svgdicenociphe2} currentUserID={currentUserID}/>
            <ChatFooter sideMenuState={sideMenuState} message={message} setMessage={setMessage} sendMessage={sendMessage}/>
            <ChatSideMenu currentUserID = {currentUserID} sideMenuState={sideMenuState} svgdice2={svgdice2}/>
        </div>
        <UDfoot/>
        </>
    )
}

export default UDchat;