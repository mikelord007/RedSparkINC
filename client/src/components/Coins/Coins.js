import React from 'react'

import coin1 from '../../assets/coin1.svg';
import coin2 from '../../assets/coin2.svg';
import coin3 from '../../assets/coin3.svg';
import coin4 from '../../assets/coin4.svg';

export const Coin1 = ({top,bottom,right,left}) => {
    let coinStyle = {
        WebkitTransition: 'all',
        msTransition: 'all',
        all: "initial",
        zIndex: "-1",
        position: "absolute",
        height: "100px",
        width: "auto",
        padding: 0,
        margin: 0,
    }
    if (top)
        coinStyle = {...coinStyle,top:`${top}`};
    if (bottom)
        coinStyle = {...coinStyle,bottom:`${bottom}`};
      if (right)
        coinStyle = {...coinStyle,right:`${right}`};
    if (left)
        coinStyle = {...coinStyle,left:`${left}`};
        console.log(coinStyle)
    return (   
        <>
                <img src={coin1} style={coinStyle} alt="c1" />
        </>
    )
}

export const Coin2 = ({ top, bottom, right, left}) => {
    let coinStyle = {
        WebkitTransition: 'all',
        msTransition: 'all',
        all: "initial",
        zIndex: "-1",
        position: "absolute",
        height: "100px",
        width: "auto",
        padding: 0,
        margin: 0,
    }
    if (top)
        coinStyle = {...coinStyle,top:`${top}`};
    if (bottom)
        coinStyle = {...coinStyle,bottom:`${bottom}`};
    if (right)
        coinStyle = {...coinStyle,right:`${right}`};
    if (left)
        coinStyle = {...coinStyle,left:`${left}`};
    return (   
        <>
                <img src={coin2} style={coinStyle} alt="c2" />
        </>
    )
}

export const Coin3 = ({ top, bottom, right, left}) => {
    let coinStyle = {
        WebkitTransition: 'all',
        msTransition: 'all',
        all: "initial",
        zIndex: "-1",
        position: "absolute",
        height: "100px",
        width: "auto",
        padding: 0,
        margin: 0,
    }
    if (top)
        coinStyle = {...coinStyle,top:`${top}`};
    if (bottom)
        coinStyle = {...coinStyle,bottom:`${bottom}`};
    if (left)
        coinStyle = {...coinStyle,left:`${left}`};
    if (right)
        coinStyle = {...coinStyle,right:`${right}`};

    return (   
        <>
                <img src={coin3} style={coinStyle} alt="c3" />
        </>
    )
}

export const Coin4 = ({ top, bottom, right, left}) => {
    let coinStyle = {
        WebkitTransition: 'all',
        msTransition: 'all',
        all: "initial",
        zIndex: "-1",
        position: "absolute",
        height: "100px",
        width: "auto",
        padding: 0,
        margin: 0,
    }
    if (top)
        coinStyle = {...coinStyle,top:`${top}`};
    if (bottom)
        coinStyle = {...coinStyle,bottom:`${bottom}`};
    if (left)
        coinStyle = {...coinStyle,left:`${left}`};
    if (right)
        coinStyle = {...coinStyle,right:`${right}`};

    return (   
        <>
                <img src={coin4} style={coinStyle} alt="c4" />
        </>
    )
}

export const Coin5 = ({ top, bottom, right, left}) => {
    let coinStyle = {
        WebkitTransition: 'all',
        msTransition: 'all',
        all: "initial",
        zIndex: "-1",
        position: "absolute",
        height: "100px",
        width: "auto",
        padding: 0,
        margin: 0,
    }
    if (top)
        coinStyle = {...coinStyle,top:`${top}`};
    if (bottom)
        coinStyle = {...coinStyle,bottom:`${bottom}`};
    if (left)
        coinStyle = {...coinStyle,left:`${left}`};
    if (right)
        coinStyle = {...coinStyle,right:`${right}`};

    return (   
        <>
                <img src={coin2} style={coinStyle} alt="c5" />
        </>
    )
}
