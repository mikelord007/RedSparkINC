import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { currentGreenButton } from "../../actions/chat";
import "./style.css"

const GreenBtn = ({className, content, id,to, onClick, disabled}) => {

    const currentBtn = useSelector(state => state.GButton)
    className = currentBtn===to?className+' greenbtn active':className + ' greenbtn'

    const dispatch = useDispatch()

    const runFn = (e) => {
        if(onClick)
            onClick(e)
        if(to)
            dispatch(currentGreenButton(to))
    }

    return(
        <button id={id} key={to} onClick={runFn} className={className} disabled={disabled} >{content}</button>
        )
}

export default GreenBtn;