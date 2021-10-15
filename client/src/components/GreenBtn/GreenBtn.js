import React from "react";


import "./style.css"

const GreenBtn = ({content, id,to}) => {


    return(
        <>
        <button id={id} key={to} className="greenbtn">{content}</button>
        </>
    )
}

export default GreenBtn;