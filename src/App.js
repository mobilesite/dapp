import React, { Component } from 'react';
import Layout from './containers/layout'
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { Link, BrowserRouter, HashRouter } from 'react-router-dom';
import {store} from './store';
class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Layout></Layout>
            </Provider>
        );
    }
}

export default App;
