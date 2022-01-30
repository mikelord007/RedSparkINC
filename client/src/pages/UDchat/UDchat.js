import React,{useState,useEffect} from "react";
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/avatars-bottts-sprites';
import io from 'socket.io-client';
import { useDispatch,useSelector } from 'react-redux';
import { Redirect } from "react-router-dom";


import { Snackbar,Alert } from "@mui/material";
import UDfoot from '../../components/UDfoot/UDfoot'
import UDnav from '../../components/UDnav/UDnav'
import ChatFooter from "./components/ChatFooter/ChatFooter";
import ChatHeader from "./components/ChatHeader/ChatHeader";
import ChatMain from "./components/ChatMain/ChatMain";
import ChatSideMenu from "./components/ChatSideMenu/ChatSideMenu";
import Creation from "../../components/Creation/Creation"
import { getCurrentListing } from "../../actions/listing";
import { fetchChat,fetchContacts,addNewMessages,updateRecipient } from "../../actions/chat";

import './style.css'

let socket;



const UDchat = () => {

    const currentUserID = JSON.parse(localStorage.getItem('profile'))?._id;
    const currentUserName = JSON.parse(localStorage.getItem('profile'))?.name;
    
    const alerts = useSelector((state)=>state.alerts);
    const [open, setOpen] = useState(false);
    useEffect(()=>{
        if(alerts.message){
            setOpen(true);
        }
    },[alerts])

    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [edit, setEdit] = useState(false);
    
    const dispatch = useDispatch()
    const ENDPOINT = `http://${process.env.REACT_APP_myMachine?process.env.REACT_APP_myMachine:'localhost'}:5000`;

    const recipient = useSelector((state) => (state?.Recipient))

    
    useEffect(() => {
        dispatch(fetchContacts(currentUserID));
        dispatch(getCurrentListing(recipient.listingRef));
    },[dispatch,recipient,currentUserID])
    
    const contacts = useSelector((state) => state.contactsReducer);
    if(Object.keys(recipient).length===0 && contacts.length){
        dispatch(updateRecipient(contacts[0]))
    }

    const listState = useSelector((state) => state.currentListing)

    const otherUser = recipient.id
    const otherUserName = recipient.name
    const sideMenuState = useState(false);

    let otherUserPic = createAvatar(style, {
        seed: otherUser || 0,
        dataUri: true,
        scale: 80
      });

    let currentUserPic = createAvatar(style, {
    seed: currentUserID,
    dataUri: true,
    scale: 80
    });

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
        // eslint-disable-next-line
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
    
    const username = JSON.parse(localStorage.getItem('profile')).uplandUsername
    const name = JSON.parse(localStorage.getItem('profile')).name

    const loggedIn = useSelector((state)=>state.auth.loggedIn);

    
    if (loggedIn === false)
    {return <Redirect to="/"/>}

    return(
        <>
            <UDnav username={username} name={name}/>
            <div id="UDchat">
                <ChatHeader sideMenuState={sideMenuState} otherUserPic={otherUserPic}/>
                <ChatMain sideMenuState={sideMenuState} otherUserPic={otherUserPic} currentUserPic={currentUserPic} currentUserID={currentUserID} setEdit={setEdit}/>
                <ChatFooter recipient={recipient} sideMenuState={sideMenuState} message={message} setMessage={setMessage} sendMessage={sendMessage}/>
                <ChatSideMenu  sideMenuState={sideMenuState}/>
                {edit?<><div id="modal-cover" onClick={() => setEdit(false)}></div><Creation autofill={true} id={'close-section'} edit={edit} buttonText={"Close Deal"} setEdit={setEdit} 
                    listState={listState}
                /></>:null}
            </div>
            <Snackbar
				open={open}
				autoHideDuration={3000}
				onClose={() => setOpen(false)}
			// action={action}
			>
				<Alert sx={{
					width: "100%",
					backgroundColor: "white",
					"& MuiPaper-root & MuiAlert-root": {
						padding: "0"
					}
				}
				}
					onClose={() => setOpen(false)}
					variant="outlined"
					severity={alerts.type} >
						{alerts.message}
						</Alert>
			</Snackbar>
            <UDfoot/>
        </>
    )
}

export default UDchat;