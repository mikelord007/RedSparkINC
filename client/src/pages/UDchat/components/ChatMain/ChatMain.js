import React,{useRef,useEffect} from 'react';
import { Icon } from "@iconify/react";
import {useSelector} from 'react-redux';
import moment from 'moment';

const ChatMain = ({otherUserPic, currentUserPic, currentUserID, sideMenuState, setEdit}) =>{

    const messages = useSelector((state) => state.chatReducer)
    const listingOwner = useSelector((state) =>  state.Recipient.listingOwner)
    const activeListingBool = useSelector((state) => state.currentListing.active)
    
    const mainMenu = useRef()
    const scrollRef = useRef()
    
    useEffect(() => {
        if(sideMenuState[0]){
            mainMenu.current.style.filter="blur(1px)"
        }
        else{
            mainMenu.current.style.filter="blur(0)"
        }
    })

    useEffect(() => {
        if(scrollRef.current)
        scrollRef.current.scrollIntoView({behavior: "smooth"})
    },[messages])

    if(messages)
    return (
        <div ref={mainMenu} onClick={()=>sideMenuState[0]?sideMenuState[1](false):null} id="chat-main">
            {
                messages.map((message,index) => 
                <div ref={scrollRef} key={index} className={(message.from===currentUserID?'home-text chat-main-text':'other-text chat-main-text')}>
                    <img src={(message.from===currentUserID?currentUserPic:otherUserPic)} alt=""/>
                    <div className="main-content">
                    <div className="text-info">
                        <div className="text-username">{message.from===currentUserID?'':message.toName}</div>
                        <div className="text-time">{moment(message.msgtime).fromNow()}</div>
                    </div>
                    <div className="main-text">{message.text}</div>
                    </div>
                </div>
                )
            }
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