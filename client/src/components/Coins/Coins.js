import React from 'react'

import coin1 from '../../assets/SVG/Asset1.svg'
import coin2 from '../../assets/SVG/Asset2.svg'
import coin3 from '../../assets/SVG/Asset3.svg'
import coin4 from '../../assets/SVG/Asset4.svg'


let commonStyle = {
    WebkitTransition: 'all',
    msTransition: 'all',
    all: "initial",
    zIndex: 1,
    position: "fixed",
    height: "100px",
    width: "auto",
    padding: 0,
    margin: 0,
}

export const Coin1 = ({top,bottom,right,left,width}) => {
    let coinStyle = commonStyle
    coinStyle = {...coinStyle,top,bottom,right,left,width}
    return (   
        <>
                <img src={coin1} style={coinStyle} alt="c1" />
        </>
    )
}

export const Coin2 = ({ top, bottom, right, left, width}) => {
    let coinStyle = commonStyle
    coinStyle = {...coinStyle,top,bottom,right,left,width}
    return (   
        <>
                <img src={coin2} style={coinStyle} alt="c2" />
        </>
    )
}

export const Coin3 = ({ top, bottom, right, left, width}) => {
    let coinStyle = commonStyle
    coinStyle = {...coinStyle,top,bottom,right,left,width}

    return (   
        <>
                <img src={coin3} style={coinStyle} alt="c3" />
        </>
    )
}

export const Coin4 = ({ top, bottom, right, left, width}) => {
    let coinStyle = commonStyle
    coinStyle = {...coinStyle,top,bottom,right,left,width}

    return (   
        <>
                <img src={coin4} style={coinStyle} alt="c4" />
        </>
    )
}

export const Coin5 = ({ top, bottom, right, left, width}) => {
    let coinStyle = commonStyle
    coinStyle = {...coinStyle,top,bottom,right,left,width}

    return (   
        <>
                <img src={coin2} style={coinStyle} alt="c5" />
        </>
    )
}
