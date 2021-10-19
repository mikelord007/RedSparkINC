import React from 'react';
import { Icon } from "@iconify/react";


const ChatFooter = ({sendMessage,message,setMessage}) =>{

    

    return (
        <div id="chat-footer">
                <div id="chat-emoji"><div id="chat-emoji-wrap"><Icon icon="entypo:emoji-happy" color="#959226" height="28" /></div></div>
                <div id="chat-textbox"><input placeholder="Type something here..." onKeyPress={(event) => event.key === 'Enter'?sendMessage(event): null} value = {message} onChange={(event) => setMessage(event.target.value)}></input></div>
                <div id="chat-send"><div id="chat-send-wrap"><Icon icon="carbon:send-alt-filled" color="#959226" height="28" /></div></div>
        </div>
    )
}


export default ChatFooter;