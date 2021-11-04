import React from "react";


import "./style.css"

const GreenBtn = ({className, content, id,to,onClick}) => {

    className += ' greenbtn';

    return(
        <button id={id} key={to} className={className} onClick={onClick}>{content}</button>
        )
}

export default GreenBtn;