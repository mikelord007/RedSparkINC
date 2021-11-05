import React from "react";


import "./style.css"

const GreenBtn = ({className, content, id,to, onClick}) => {

    className += ' greenbtn';

    return(
        <button id={id} key={to} onClick={onClick} className={className}>{content}</button>
        )
}

export default GreenBtn;