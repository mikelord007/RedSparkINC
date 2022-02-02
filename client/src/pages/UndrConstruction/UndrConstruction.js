import React from "react";

import mascot from './assets/mascot.svg'
import './style.css'

const UndrConstruction = () => {
    return (
        <div id="deskpage">
            <section id="sec1">
                <img src={mascot} alt="mascot"/>
            </section>
            <section id="sec2">
                <h2>Under Construction</h2>
                <p>The desktop version of this web app is under construction. Meanwhile, please visit this page from a mobile device.</p>
            </section>
        </div>
    )
}

export default UndrConstruction;