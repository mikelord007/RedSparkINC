import React from "react";

import "./style.css"

const GreenBtn = ({className,text}) => {
    className += ' greenbtn';
    return(
        <button className={className} >{text}</button>
    )
}

export default GreenBtn;