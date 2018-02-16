import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';

import List from './components/List';
import Details from './components/Details';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
          <h1 className="App-title">Component Viewer</h1>
          </header>
          <div className="wrapper">
            <div id="component-list">
              <List/>
            </div>
            <div id="container">
              <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/:platform/:project' component={Details}/>
              </Switch>
            </div>  
            </div>
        </div>
      </div>
    );
  }
}

const Home = () => (
  <div>
    <div id="component-list">
      <List/>
    </div>
  </div>
);

const Project = () => {
  <div>
    <Details/>
  </div>
};

export default App;