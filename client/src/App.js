import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import UDchat from "./pages/UDchat/UDchat";
import UDtradehist from "./pages/UDtradehist/UDtradehist";
import UDlistings from "./pages/UDlistings/UDlistings";
import UDcreatenew from "./pages/UDcreatenew/UDcreatenew"

import './style.css'

const App = () => {

    return(
        <Router>
        <Switch>
            <Route exact path="/">
                <UDlistings/>
            </Route>
            <Route exact path="/chat">
                <UDchat/>
            </Route>
            <Route exact path="/trade">
                <UDtradehist/>
            </Route>
            <Route exact path="/create">
                <UDcreatenew/>
            </Route>
        </Switch>
        </Router>
    )
}

export default App;