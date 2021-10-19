import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';

const ChatMain = ({svgdice2, svgdicenociphe2, messages, currentUserID}) =>{

    

    if(messages)
    return (
        <div id="chat-main">
             <ScrollToBottom>
            {   
                messages.map((message,index) => 
                <div key={index} className={(message.user===currentUserID?'home-text':'other-text')}>
                    <img src={(message.user===currentUserID?svgdicenociphe2:svgdice2)} alt=""/>
                    <div className="main-content">
                    <div className="text-info">
                        <div className="text-username">{message.user}</div>
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