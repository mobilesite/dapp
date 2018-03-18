import React, { Component } from 'react';
import logo from './logo.svg';
import './App.less';
import { Button } from 'antd-mobile';
import Checkbox from './components/checkbox';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button>测试</Button>

        <Checkbox checked="true" label="我同意用户条款"></Checkbox>
      </div>
    );
  }
}

export default App;
