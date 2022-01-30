import React,{useRef,useEffect} from 'react';
import { Icon } from "@iconify/react";


const ChatFooter = ({sendMessage,message,setMessage,sideMenuState, recipient}) =>{

    const footer = useRef()

    useEffect(() => {
        if(sideMenuState[0]){
            footer.current.style.filter="blur(1px)"
        }
        if(!sideMenuState[0]){
            footer.current.style.filter="blur(0)"
        }
    })

    return (
        <div ref={footer} id="chat-footer">
                <div id="chat-textbox">
                <input placeholder="Type something here..." onKeyPress={(event) => event.key === 'Enter'?sendMessage(event): null} value = {message} onChange={(event) => setMessage(event.target.value)} disabled={recipient.id?false:true}/>
                </div>
                <div id="chat-send" onClick={(event) => {sendMessage(event)}} ><div id="chat-send-wrap"><Icon icon="carbon:send-alt-filled" color="#959226" height="28" /></div></div>
        </div>
    )
}


export default ChatFooter;