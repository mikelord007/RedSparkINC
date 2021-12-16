import React from "react";
import { Icon } from '@iconify/react';
import { useDispatch } from 'react-redux';


import './style.css'
import GreenBtn from '../../components/GreenBtn/GreenBtn'

const Popup = ({dispArray,CloseButtonFn,GreenBool,GreenBtnFn, GreenBtnFnArgs, GreenBtnContent, doDispatch, disableButton,height}) => {
    const dispatch = useDispatch();


    return (
        <div id="listing-ping" style={{height: height}}>
                <Icon onClick={() => CloseButtonFn(false)} icon="carbon:close-filled" color="black" width="32" />
                {dispArray}
                {GreenBool?<GreenBtn disabled={disableButton} content={GreenBtnContent} id={'ping-button'} onClick={() => { doDispatch?dispatch(GreenBtnFn(...GreenBtnFnArgs)): GreenBtnFn(...GreenBtnFnArgs); CloseButtonFn(false);} }/>:null}
        </div>
    )
}

export default Popup;