import React from "react";
import { Icon } from '@iconify/react';
import { useDispatch } from 'react-redux';


import './style.css'
import GreenBtn from '../../components/GreenBtn/GreenBtn'

const Popup = ({dispArray,CloseButtonFn,GreenBool,GreenBtnFn, GreenBtnFnArgs, GreenBtnContent, doDispatch}) => {
    const dispatch = useDispatch();
    


    return (
        <div id="listing-ping">
                <Icon onClick={() => CloseButtonFn(false)} icon="carbon:close-filled" color="black" width="32" />
                {dispArray}
                {GreenBool?<GreenBtn content={GreenBtnContent} id={'ping-button'} onClick={() => { doDispatch?dispatch(GreenBtnFn(...GreenBtnFnArgs)): GreenBtnFn(...GreenBtnFnArgs)} }/>:null}
        </div>
    )
}

export default Popup;