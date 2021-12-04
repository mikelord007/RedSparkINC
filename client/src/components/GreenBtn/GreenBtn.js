import React,{useRef,useState} from "react";
import { useHistory } from 'react-router-dom';

import "./style.css"

const GreenBtn = ({className, content, id,to, onClick, disabled}) => {

    const [classNameState, setClassNameState] = useState(className?className + ' greenbtn':'greenbtn')
    const history = useHistory();

    const btn = useRef()
    const handleClick = (e) => {
        console.log("it's now clicked")
        if(onClick){
            onClick();
        }
        history.push(to)
        setClassNameState(className?className + ' greenbtn active':'greenbtn active')
    }


    return(
        <button id={id} ref={btn} key={to} onClick={handleClick} className={classNameState} disabled={disabled} >{content}</button>
        )
}

export default GreenBtn;