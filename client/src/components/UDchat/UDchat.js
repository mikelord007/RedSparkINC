import React from "react";
import { Icon } from "@iconify/react";
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/avatars-bottts-sprites';

import UDnav from "../UDnav/UDnav";
import UDfoot from "../UDfoot/UDfoot";
import './style.css'

const UDchat = () => {
    let svgdice = createAvatar(style, {
        seed: 'Baconguy',
        dataUri: true
      });

    let svgdice2 = createAvatar(style, {
        seed: 'Baconguy',
        dataUri: true,
        scale: 80
      });

    let svgdicenociphe2 = createAvatar(style, {
    seed: 'Nociphe',
    dataUri: true,
    scale: 80
    });

    return (
        <>
        <UDnav username={`Nochiphe`} />
        <div id="UDchat">
            <div id="chat-header">
                <div id="chat-namelist"><Icon icon="ci:hamburger" color="black" height="28" /></div>
                <div id="chat-otheruser"><div id="chat-img"><img src={svgdice} alt=""/></div></div>
                <div id="chat-morebutton"><Icon icon="carbon:overflow-menu-horizontal" color="black" height="34" /></div>
            </div>
            <div id="chat-main">
                <div className="other-text">
                    <img src={svgdice2} alt=""/>
                    <div className="main-content">
                    <div className="text-info">
                        <div className="text-username">Baconguy</div>
                        <div className="text-time">11:34 AM</div>
                    </div>
                    <div className="main-text">I wasn’t sure about that purchase, but it ended up well.</div>
                    </div>
                </div>
                <div className="home-text">
                <img src={svgdicenociphe2} alt=""/>
                <div className="main-content">
                    <div className="text-info">
                        <div className="text-username">You</div>
                        <div className="text-time">11.35 AM</div>
                    </div>
                    <div className="main-text">You just got to trust your instincts brother.</div>
                    </div>
                </div>
            </div>
            <div id="chat-footer">
                <div id="chat-emoji"><div id="chat-emoji-wrap"><Icon icon="entypo:emoji-happy" color="#959226" height="28" /></div></div>
                <div id="chat-textbox"><input placeholder="Type something here..."></input></div>
                <div id="chat-send"><div id="chat-send-wrap"><Icon icon="carbon:send-alt-filled" color="#959226" height="28" /></div></div>
            </div>
        </div>
        <UDfoot/>
        </>
    )
}

export default UDchat;