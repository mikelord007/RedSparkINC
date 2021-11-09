import React,{useState,useEffect} from "react";
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/avatars-bottts-sprites';
import io from 'socket.io-client';
import { useDispatch,useSelector } from 'react-redux';
import { fetchChat,fetchContacts,addNewMessages } from "../../actions/chat";
import { getCurrentListing } from "../../actions/listing";


import UDfoot from '../../components/UDfoot/UDfoot'
import UDnav from '../../components/UDnav/UDnav'
import ChatFooter from "./components/ChatFooter/ChatFooter";
import ChatHeader from "./components/ChatHeader/ChatHeader";
import ChatMain from "./components/ChatMain/ChatMain";
import ChatSideMenu from "./components/ChatSideMenu/ChatSideMenu";
import Creation from "../../components/Creation/Creation"

import './style.css'

let socket;
const currentUserID = JSON.parse(localStorage.getItem('profile')).result._id
const currentUserName = "peter"

const UDchat = () => {
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [edit, setEdit] = useState(false);
    
    const dispatch = useDispatch()
    const ENDPOINT = 'http://localhost:5000'

    const recipient = useSelector((state) => state.Recipient)
    const listState = useSelector((state) => state.currentListing)
    
    const otherUser = recipient.id
    const otherUserName = recipient.name
    const sideMenuState = useState(false);

    let otherUserPic = createAvatar(style, {
        seed: otherUser,
        dataUri: true,
        scale: 80
      });

    let currentUserPic = createAvatar(style, {
    seed: currentUserID,
    dataUri: true,
    scale: 80
    });


    useEffect(() => {
        dispatch(fetchContacts(currentUserID));
        dispatch(getCurrentListing(recipient.listingRef))
    },[dispatch,recipient])
    
    
    const uid = otherUser<currentUserID?otherUser+currentUserID:currentUserID+otherUser

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
            socket.emit('sendMessage', chatObj, recipient, (chatObj) => {setMessage(''); dispatch(addNewMessages(chatObj)) });
        }
    }

    return (
        <>
        <UDnav username={`Nochiphe`} />
        <div id="UDchat">
            <ChatHeader sideMenuState={sideMenuState} otherUserPic={otherUserPic}/>
            <ChatMain sideMenuState={sideMenuState} otherUserPic={otherUserPic} currentUserPic={currentUserPic} currentUserID={currentUserID} setEdit={setEdit}/>
            <ChatFooter sideMenuState={sideMenuState} message={message} setMessage={setMessage} sendMessage={sendMessage}/>
            <ChatSideMenu  sideMenuState={sideMenuState}/>
            {edit?<Creation autofill={true} id={'close-section'} edit={edit} buttonText={"Close Deal"} setEdit={setEdit} 
                listState={listState}
            />:null}
        </div>
        <UDfoot/>
        </>
    )
}

export default UDchat;