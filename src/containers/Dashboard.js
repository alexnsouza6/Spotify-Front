import React, { Component, Fragment } from 'react';
import axios from 'axios';
import {
  Grid, Segment, Header, Image,
} from 'semantic-ui-react';
import { history } from '../App';
import '../common/stylesheets/container.css';
import '../common/stylesheets/button.css';

class Dashboard extends Component {
  state = { user: {} };

  async componentDidMount() {
    const response = await axios.get('http://localhost:3000/api/v1/user');
    this.setState({ user: response.data });
  }

  render() {
    const { user } = this.state;
    if (user) {
      return (
        <Fragment>
          <Grid
            verticalAlign="middle"
            textAlign="center"
            className="container-fsize container-color--black"
          >
            <Grid.Column>
              <Segment className="container-hsize container-color--black">
                <Header as="h1" size="huge" style={{ color: 'white' }}>
                  <Image circular src={require('../common/images/spotify.png')} />
                  Hello,
                  {' '}
                  {user.username}
                </Header>
              </Segment>
            </Grid.Column>
          </Grid>
        </Fragment>
      );
    }
    return history.push('/login');
  }
}

export default Dashboard;
