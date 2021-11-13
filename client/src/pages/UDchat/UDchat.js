import React,{useState,useEffect} from "react";
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/avatars-bottts-sprites';
import io from 'socket.io-client';
import { useDispatch,useSelector } from 'react-redux';
import { fetchChat,fetchContacts,addNewMessages } from "../../actions/chat";
import { getCurrentListing } from "../../actions/listing";
// import { Redirect } from "react-router";


import UDfoot from '../../components/UDfoot/UDfoot'
import UDnav from '../../components/UDnav/UDnav'
import ChatFooter from "./components/ChatFooter/ChatFooter";
import ChatHeader from "./components/ChatHeader/ChatHeader";
import ChatMain from "./components/ChatMain/ChatMain";
import ChatSideMenu from "./components/ChatSideMenu/ChatSideMenu";
import Creation from "../../components/Creation/Creation"

import './style.css'

let socket;


const UDchat = () => {

    if(!JSON.parse(localStorage.getItem('profile')).result._id){
        localStorage.setItem('profile',
        '{"result":{"_id":"617c4b768d9906ef94363db7","name":"Manu Jasan","email":"manujasan23@gmail.com","password":"$2a$12$5WlblfExzpdHHVmWGSVexuwNzOanLj1jhZ.Pz/puKeWCtDSzQMIC2","uplandUsername":"mike007","created":"2021-10-29T19:28:54.000Z","listings":[],"contacts":[{"id":"6172f44ab6c6765cab7f27f2","name":"cryptoKing","listingRef":"617c3f31cb464bc20b274284","listingOwner":false},{"id":"6172f44ab6c6765cab7f27d8","name":"Emgi","listingRef":"617c3f31cb464bc20b274286","listingOwner":false},{"id":"6172f44ab6c6765cab7f27d2","name":"benn","listingRef":"617c3f31cb464bc20b274289","listingOwner":false},{"id":"6172f44ab6c6765cab7f27e3","name":"coinSourous","listingRef":"617c3f31cb464bc20b274285","listingOwner":false},{"id":"6172f44ab6c6765cab7f27d3","name":"benn","listingRef":"6187d9cec5654b812eed0518","listingOwner":true}],"__v":0},"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hbnVqYXNhbjIzQGdtYWlsLmNvbSIsImlkIjoiNjE3YzRiNzY4ZDk5MDZlZjk0MzYzZGI3IiwiaWF0IjoxNjM2NjkxMTU3fQ.B2xQvyYkxDptaA2n3UrEzlxp4z6Pz9vQF-GrdTQj4To"}')
    }

    const currentUserID = JSON.parse(localStorage.getItem('profile')).result._id
    const currentUserName = "peter"

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
    },[dispatch,recipient,currentUserID])
    
    
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