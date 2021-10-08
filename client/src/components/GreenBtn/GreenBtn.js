import React from "react";

import "./style.css"

const GreenBtn = ({content, id}) => {
    return(
        <button id={id} class="greenbtn">{content}</button>
    )
}

export default GreenBtn;