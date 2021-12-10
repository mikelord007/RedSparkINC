import React from "react";
// import { useHistory } from "react-router";

import "./style.css"

const GreenBtn = ({className, content, id,to, onClick, disabled}) => {

    className += ' greenbtn';


    return(
        <button id={id} key={to} onClick={onClick} className={className} disabled={disabled} >{content}</button>
        )
}

export default GreenBtn;