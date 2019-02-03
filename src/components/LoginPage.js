import React from "react";
import { Button, Grid, Segment, Header, Image } from "semantic-ui-react";
import "../common/stylesheets/container.css";
import "../common/stylesheets/button.css";

const LoginPage = () => (
  <Grid
    verticalAlign="middle"
    textAlign="center"
    className="container-fsize container-color--black"
  >
    <Grid.Column>
      <Segment className="container-hsize container-color--black">
        <Header as="h1" size="huge" style={{ color: "white" }}>
          <Image circular src={require("../common/images/spotify.png")} />
          Which artists are you following on Spotify?
        </Header>
        <Button
          className="button-rounded button-style--default"
          as="a"
          href="https://spotify-api-artists-only.herokuapp.com/api/v1/login"
        >
          FIND OUT{" "}
        </Button>
      </Segment>
    </Grid.Column>
  </Grid>
);

export default LoginPage;
