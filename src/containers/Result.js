import React, { Component } from 'react';
import { getToken, getSongInfo } from '../api';
import generateColors from '../generateColors';
import Palette from '../components/Palette';

class Result extends Component {
  state = {
    songInfo: {}
  };

  async componentWillMount() {
    const token = getToken();
    const songInfo = await getSongInfo(token, this.props.match.params.id);
    this.setState({ songInfo });
  }

  render() {
    return (
      <div>
        <h1>
          {this.props.match.params.song}
        </h1>
        <Palette colors={generateColors(this.state.songInfo)} />
      </div>
    );
  }
}

export default Result;
