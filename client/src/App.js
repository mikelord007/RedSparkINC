import React from "react";
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import SignupPage from './pages/SignupPage/SignupPage.js';

const App = () => {

    return(

        <Router>
        <Switch>
            <Route path='/' exact component={WelcomePage}  />
            <Route path='/signup' component={SignupPage}  />
        </Switch>
        </Router>
    )
}

export default App;