import React,{useRef,useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchContacts } from "../../../../actions/chat";

const ChatSideMenu = ({svgdice2,sideMenuState,currentUserID}) =>{
    
    const sideMenu = useRef();
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchContacts(currentUserID));
    },[currentUserID, dispatch])
    
    
    useSelector((state) => console.log("state is", state));

    useEffect(() => {
        if(sideMenuState[0]) sideMenu.current.style.transform="translateX(0)";
        else sideMenu.current.style.transform="translateX(-100%)";
    },[sideMenuState])

    return (
        <div ref={sideMenu} id="side-menu">
                <div className="person-item">
                        <div className="profile-icon"><img src={svgdice2} alt=""/></div>
                    <div className="chat-info-wrapper">
                    <div className="chat-info">
                        <div className="user-name">Baconguy</div>
                        <div className="chat-time">11.35 PM</div>
                    </div>
                    <div className="user-text"><span>We're gonna do this</span></div>
                    </div>
                </div>
        </div>
    )
}


export default ChatSideMenu;