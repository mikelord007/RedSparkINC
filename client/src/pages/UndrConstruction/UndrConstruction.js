import React from "react";

import bg from './assets/bg-img.png'
import mascot from './assets/mascot.svg'
import './style.css'

const UndrConstruction = () => {
    return (
        <>
            <section id="sec1">
                <img src={mascot} />
            </section>
            <section id="sec2">
                <h2>Under Construction</h2>
                <p>The desktop version of this web app is under construction. Meanwhile, please visit this page from a mobile device.</p>
            </section>
        </>
    )
}

export default UndrConstruction;