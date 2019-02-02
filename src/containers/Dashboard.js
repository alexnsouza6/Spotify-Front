import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { history } from '../App';

class Dashboard extends Component {
  state = { user: {} };

  async componentDidMount() {
    const response = await axios.get('http://localhost:3000/api/v1/user');
    this.setState({ user: response.data });
  }

  render() {
    const { user } = this.state;
    if (this.state.user) {
      return (
        <Fragment>
          Hello,
          {user.username}
        </Fragment>
      );
    }
    return history.push('/login');
  }
}

export default Dashboard;
