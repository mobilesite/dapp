import React, { Component, Fragment } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Home from '../home';
import My from '../my';
import Notfound from '../notfound';

const history = createBrowserHistory()

export default class Layout extends Component {
    render(){
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/my" component={My}></Route>
                    <Route exact path="*" component={Notfound}></Route>
                </Switch>
            </Router>
        )
    }
}