import React, { Component, Fragment } from 'react';
import axios from 'axios';
import {
  Grid, Segment, Header, Image, List,
} from 'semantic-ui-react';
import { history } from '../App';
import '../common/stylesheets/container.css';
import '../common/stylesheets/button.css';

class Dashboard extends Component {
  state = { user: {}, artists: [] };

  async componentDidMount() {
    try {
      const userResponse = await axios.get(' http://localhost:3000/api/v1/user');
      this.setState({ user: userResponse.data });
      const artistsResponse = await axios.get('http://localhost:3000/api/v1/artists', {
        params: {
          name: this.state.user.username,
        },
      });
      this.setState({ artists: artistsResponse.data });
    } catch {
      history.push('/login');
    }
  }

  render() {
    const { user, artists } = this.state;
    if (user) {
      return (
        <Fragment>
          <Grid
            verticalAlign="middle"
            textAlign="center"
            className="container-fsize container-color--black"
          >
            <Grid.Column className="container-fsize">
              <Segment className="container-fsize container-color--black">
                <Header as="h1" size="huge" style={{ color: 'white' }}>
                  <Image circular src={require('../common/images/spotify.png')} />
                  Hello,
                  {' '}
                  {user.username}
                </Header>
                <Header as="h2" size="huge" style={{ color: 'white' }}>
                  Here are some of the artists you follow:
                </Header>
                <List
                  size="large"
                  animated
                  celled
                  verticalAlign="middle"
                  style={{ color: 'white', overflow: 'scroll', height: '80%' }}
                >
                  {artists.map(artist => (
                    <List.Item key={artist.name}>
                      <Image avatar src={artist.images[0].url} />
                      <List.Content>
                        <List.Header style={{ color: 'white' }}>{artist.name}</List.Header>
                        <List.Description style={{ color: 'white' }}>
                          Followers:
                          {' '}
                          {artist.followers.total.toLocaleString(undefined, {
                            minimumFractionDigits: 0,
                          })}
                        </List.Description>
                      </List.Content>
                    </List.Item>
                  ))}
                </List>
              </Segment>
            </Grid.Column>
          </Grid>
        </Fragment>
      );
    }
  }
}

export default Dashboard;
