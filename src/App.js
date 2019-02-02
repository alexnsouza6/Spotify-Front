import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Dashboard from './containers/Dashboard';
import LoginPage from './components/LoginPage';
import './common/stylesheets/index.css';

export const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <Switch>
            <Route exact path="/login" component={LoginPage} />
            <Route path="/" component={Dashboard} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
