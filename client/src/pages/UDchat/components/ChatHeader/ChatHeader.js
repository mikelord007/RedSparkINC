import React from 'react';
import { Icon } from "@iconify/react";


const ChatHeader = ({svgdice2}) =>{

    

    return (
        <div id="chat-header">
                <div id="chat-namelist"><Icon icon="ci:hamburger" color="black" height="28" /></div>
                <div id="chat-otheruser"><div id="chat-img"><img src={svgdice2} alt=""/></div></div>
                <div id="chat-morebutton"><Icon icon="carbon:overflow-menu-horizontal" color="black" height="34" /></div>
        </div>
    )
}


export default ChatHeader;