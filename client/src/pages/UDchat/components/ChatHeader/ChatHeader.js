import React,{useRef,useEffect} from 'react';
import { Icon } from "@iconify/react";


const ChatHeader = ({otherUserPic,sideMenuState}) =>{

    const chatHead= useRef()
    
    useEffect(() => {
        if(sideMenuState[0]){
            chatHead.current.style.filter="blur(1px)"
        }
        else{
            chatHead.current.style.filter="blur(0)"
        }
    })

    return (
        <div ref={chatHead} id="chat-header">
                <div id="chat-namelist"><button onClick={() =>  sideMenuState[1](true)} ><Icon icon="ci:hamburger" color="black" height="28" /> </button></div>
                <div id="chat-otheruser"><div id="chat-img"><img src={otherUserPic} alt=""/></div></div>
                <div id="chat-morebutton"></div>
        </div>
    )
}


export default ChatHeader;