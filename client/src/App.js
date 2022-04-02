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
                <Route exact path="/listings" render={() => { if (localStorage.getItem('token')) return <UDlistings/>; else return <AuthPage /> }} />
                <Route exact path="/chat" render={() => { if (localStorage.getItem('token')) return <UDchat/>; else return <AuthPage /> }} />
                <Route exact path="/trade" render={() => { if (localStorage.getItem('token')) return <UDtradehist/>; else return <AuthPage /> }} />
                <Route exact path="/create" render={() => { if (localStorage.getItem('token')) return <UDcreatenew/>; else return <AuthPage /> }} />
            </Switch>
        </Router>
    )

    else
        return (
            <UndrConstruction/>
        )
}

export default App;