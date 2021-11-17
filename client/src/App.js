import React from "react";
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Head from "./components/Head/Head"
import UDchat from "./pages/UDchat/UDchat";
import UDtradehist from "./pages/UDtradehist/UDtradehist";
import UDlistings from "./pages/UDlistings/UDlistings";
import UDcreatenew from "./pages/UDcreatenew/UDcreatenew"

import WelcomePage from './pages/WelcomePage/WelcomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import './style.css'
import AuthPage from "./pages/AuthPage/AuthPage.js";


const App = () => {
    
    return(
        <Router>
        <Head/>
        <Switch>
            <Route exact path='/'  component={WelcomePage}  />
            <Route exact path='/auth' component={AuthPage}  />
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