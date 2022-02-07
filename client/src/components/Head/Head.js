import React from 'react';
import MetaTags from 'react-meta-tags';


const Head = () => {

    const height = window.innerHeight;

    return(
        <MetaTags>
            <title>RED SPARK INC</title>
            <meta name="viewport" content={`width=device-width, height=${height}, initial-scale=1, minimum-scale=1, maximum-scale=1`}/>
            <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
        </MetaTags>
    )
}

export default Head;