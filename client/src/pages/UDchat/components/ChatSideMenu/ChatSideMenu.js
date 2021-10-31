import React,{useRef,useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { updateRecipient } from '../../../../actions/chat';

const ChatSideMenu = ({svgdice2,sideMenuState,currentUserID}) =>{
    
    const sideMenu = useRef();
    const contacts = useSelector((state) => state.contactsReducer);
    const dispatch = useDispatch()

    useEffect(() => {
        if(sideMenuState[0]) sideMenu.current.style.transform="translateX(0)";
        else sideMenu.current.style.transform="translateX(-100%)";
    },[sideMenuState])

    return (
        <div ref={sideMenu} id="side-menu">
                {
                    contacts.map((elem,index) => ( 
                        <div onClick={() => dispatch(updateRecipient(elem.id))} className="person-item" key={index}>
                            <div className="profile-icon"><img src={svgdice2} alt=""/></div>
                            <div className="chat-info-wrapper">
                            <div className="chat-info">
                                <div className="user-name">{elem.name}</div>
                                <div className="chat-time">11.35 PM</div>
                            </div>
                            <div className="user-text"><span>We're gonna do this</span></div>
                            </div>
                        </div>
                    
                ))
                }
        </div>
    )
}


export default ChatSideMenu;