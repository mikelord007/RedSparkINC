import React,{useRef,useEffect} from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import { Icon } from "@iconify/react";
import {useSelector} from 'react-redux'

const ChatMain = ({otherUserPic, currentUserPic, currentUserID, sideMenuState, setEdit}) =>{

    const messages = useSelector((state) => state.chatReducer)
    const listingOwner = useSelector((state) =>  state.Recipient.listingOwner)
    const activeListingBool = useSelector((state) => state.currentListing.active)
    
    const mainMenu = useRef()
    
    useEffect(() => {
        if(sideMenuState[0]){
            mainMenu.current.style.filter="blur(1px)"
        }
        else{
            mainMenu.current.style.filter="blur(0)"
        }
    })

    if(messages)
    return (
        <div ref={mainMenu} onClick={()=>sideMenuState[0]?sideMenuState[1](false):null} id="chat-main">
             <ScrollToBottom>
            {   
                messages.map((message,index) => 
                <div key={index} className={(message.from===currentUserID?'home-text':'other-text')}>
                    <img src={(message.from===currentUserID?currentUserPic:otherUserPic)} alt=""/>
                    <div className="main-content">
                    <div className="text-info">
                        <div className="text-username">{message.from===currentUserID?'you':message.toName}</div>
                        <div className="text-time">11:34 AM</div>
                    </div>
                    <div className="main-text">{message.text}</div>
                    </div>  
                </div>
                )
            }
            </ScrollToBottom>
            {
            listingOwner && activeListingBool?
            <div id = "close-trade">
                <Icon icon="teenyicons:tick-circle-solid" onClick={() => { setEdit(true)}} color="#52bd00" height="32" />
            </div>
            :
            null
            }
        </div>
    )
   
}


export default ChatMain;