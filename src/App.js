import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import Dashboard from './containers/Dashboard';

const button = () => (
  <Button as="a" href="http://localhost:3000/api/v1/login">
    Log in
    {' '}
  </Button>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/login" component={button} />
            <Route path="/" component={Dashboard} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
