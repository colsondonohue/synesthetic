import React, { Component } from 'react';
import authorize from '../api';
import config from '../config';
import Button from '../components/Button';
import Centered from '../components/Centered';

class Login extends Component {
  handleClick() {
    authorize(config.SPOTIFY_ID);
  }
  render() {
    return (
      <Centered>
        <Button onClick={this.handleClick}>Login to Spotify</Button>
      </Centered>
    );
  }
}

export default Login;
