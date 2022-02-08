import React from "react";
import { BrowserRouter as Router, Route, Switch,Redirect } from 'react-router-dom';

import Head from "./components/Head/Head"
import UDchat from "./pages/UDchat/UDchat";
import UDtradehist from "./pages/UDtradehist/UDtradehist";
import UDlistings from "./pages/UDlistings/UDlistings";
import UDcreatenew from "./pages/UDcreatenew/UDcreatenew"
import WelcomePage from './pages/WelcomePage/WelcomePage';
import AuthPage from "./pages/AuthPage/AuthPage.js";
import UndrConstruction from './pages/UndrConstruction/UndrConstruction'
import './style.css'


const App = () => {

    const mobile = window.innerWidth < 425

    if (mobile)
    return (
        <Router>
            <Head />
            <Switch>
                <Route exact path='/' render={() => { if (localStorage.getItem('token')) return <Redirect to="/listings" />; else return <WelcomePage /> }} />
                <Route exact path='/auth' render={() => { if (localStorage.getItem('token')) return <Redirect to="/listings" />; else return <AuthPage /> }} />
                <Route exact path="/listings" component={UDlistings} />
                <Route exact path="/chat" component={UDchat} />
                <Route exact path="/trade" component={UDtradehist} />
                <Route exact path="/create" component={UDcreatenew} />
            </Switch>
        </Router>
    )

    else
        return (
            <UndrConstruction/>
        )
}

export default App;