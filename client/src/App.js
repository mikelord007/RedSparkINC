import React from "react";

import './style.css'
import GreenBtn from './components/GreenBtn/GreenBtn';
import UDskeleton from './components/UDskeleton/UDskeleton';
import WelcomePage from './components/WelcomePage/WelcomePage';

const App = () => {

    return(
        <div>
            <UDskeleton username={"Nociphe"}/>
            <WelcomePage  />
        </div>

    )
}

export default App;