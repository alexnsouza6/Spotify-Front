import React, { Component, Fragment } from 'react';
import axios from 'axios';

class Dashboard extends Component {
  state = { user: {} };

  async componentDidMount() {
    const response = await axios.get('http://localhost:3000/api/v1/user');
    this.setState({ user: response.data });
  }

  render() {
    const { user } = this.state;
    return (
      <Fragment>
        Hello,
        {user.username}
      </Fragment>
    );
  }
}

export default Dashboard;
