import React from "react";
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import UDchat from "./pages/UDchat/UDchat";
import UDtradehist from "./pages/UDtradehist/UDtradehist";
import UDlistings from "./pages/UDlistings/UDlistings";
import UDcreatenew from "./pages/UDcreatenew/UDcreatenew"

import WelcomePage from './pages/WelcomePage/WelcomePage';
import SignupPage from './pages/SignupPage/SignupPage.js';
import LoginPage from './pages/LoginPage/LoginPage';
import './style.css'

const App = () => {

    return(
        <Router>
        <Switch>
            <Route exact path='/'  component={WelcomePage}  />
            <Route exact path='/signup' component={SignupPage}  />
            <Route exact path='/login' component={LoginPage}  />
            <Route exact path="/listings" component={UDlistings} />
            <Route exact path="/chat" component={UDchat}/>
            <Route exact path="/trade" component={UDtradehist}/>
            <Route exact path="/create" component={UDcreatenew}/>
        </Switch>
        </Router>
    )
}

export default App;