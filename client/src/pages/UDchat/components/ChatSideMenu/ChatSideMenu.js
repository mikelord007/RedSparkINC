import React,{useRef,useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/avatars-bottts-sprites';
import moment from 'moment';

import { updateRecipient } from '../../../../actions/chat';

const ChatSideMenu = ({sideMenuState}) =>{
    
    const sideMenu = useRef();
    const contacts = useSelector((state) => { return state.contactsReducer;});
    const dispatch = useDispatch()

    useEffect(() => {
        if(sideMenuState[0]) sideMenu.current.style.transform="translateX(0)";
        else sideMenu.current.style.transform="translateX(-100%)";
    },[sideMenuState])

    const handleUpdate = (elem) => {
        dispatch(updateRecipient(elem));
        sideMenuState[1](false);
    }

    const sortingFn = (a,b) => {
        return new Date(b.lastMsgTime) - new Date(a.lastMsgTime)
    }

    contacts.sort(sortingFn)

    return (
        <div ref={sideMenu} id="side-menu">
                {
                    contacts.map((elem,index) => {

                        let profilePic = createAvatar(style, {
                                                            seed: elem.id,
                                                            dataUri: true,
                                                            scale: 80
                                                            });
                        return( 
                        <div onClick={() => handleUpdate(elem)} className="person-item" key={index}>
                            <div className="profile-icon"><img src={profilePic} alt=""/></div>
                            <div className="chat-info-wrapper">
                            <div className="chat-info">
                                <div className="user-name">{elem.name}</div>
                                <div className="chat-time">{moment(elem.lastMsgTime).fromNow(true)}</div>
                            </div>
                            <div className="user-text"><span>{elem.lastMessage?elem.lastMessage:' ...'}</span></div>
                            </div>
                        </div>)
                    
                })
                }
        </div>
    )
}


export default ChatSideMenu;