import React,{useRef,useEffect} from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
//eslint-disable-next-line
import {useSelector} from 'react-redux'

const ChatMain = ({svgdice2, svgdicenociphe2, currentUserID, socket, sideMenuState}) =>{

    const messages = useSelector((state) => {console.log(state); return state.chatReducer})

    
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
                    <img src={(message.from===currentUserID?svgdicenociphe2:svgdice2)} alt=""/>
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
            </div>
    )
   
}


export default ChatMain;