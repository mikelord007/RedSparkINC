import React,{useState,useRef} from "react";
import { Redirect } from "react-router-dom";


import "./style.css"

const GreenBtn = ({content, id,to}) => {

    const [redirect,setRedirect] = useState(false)
    const updateRedirect = () => {
        setRedirect(true)
        buttonRef.current && buttonRef.current.focus();
    }

    const buttonRef = useRef(null)

    return(
        <>
        <button id={id} key={to} className="greenbtn" onClick={updateRedirect}>{content}</button>
        { redirect?<Redirect to={to}/>:null }
        </>
    )
}

export default GreenBtn;