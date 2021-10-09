import React from "react";

import "./style.css"

const GreenBtn = ({content, id}) => {
    return(
        <button id={id} className="greenbtn">{content}</button>
    )
}

export default GreenBtn;