import React from "react";


import "./style.css"

const GreenBtn = ({className, content, id,to}) => {

    className += ' greenbtn';

    return(
        <button id={id} key={to} className={className}>{content}</button>
        )
}

export default GreenBtn;