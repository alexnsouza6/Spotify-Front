import React from 'react';
import {
  Button, Grid, Segment, Header, Image,
} from 'semantic-ui-react';

const LoginPage = () => (
  <Grid
    verticalAlign="middle"
    textAlign="center"
    style={{ height: '100%', backgroundColor: 'black' }}
  >
    <Grid.Column>
      <Segment style={{ backgroundColor: 'black', height: '50%' }}>
        <Header as="h1" size="huge" style={{ color: 'white' }}>
          <Image circular src={require('../common/images/spotify.png')} />
          Which artists are you following on Spotify?
        </Header>
        <Button
          style={{ borderRadius: '25px', backgroundColor: '#67d15f', color: 'white' }}
          as="a"
          href="http://localhost:3000/api/v1/login"
        >
          FIND OUT
          {' '}
        </Button>
      </Segment>
    </Grid.Column>
  </Grid>
);

export default LoginPage;
