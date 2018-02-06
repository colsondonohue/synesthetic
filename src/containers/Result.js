import React, { Component } from 'react';
import { getToken, getSongInfo } from '../api';
import generateColors from '../generateColors';
import Palette from '../components/Palette';

class Result extends Component {
  state = {
    songInfo: {},
    copied: ''
  };

  async componentWillMount() {
    const token = getToken();
    const songInfo = await getSongInfo(token, this.props.match.params.id);
    this.setState({ songInfo });
  }

  handleClick = e => {
    const { color } = e.target.dataset;
    const textArea = document.createElement('textarea');
    textArea.innerText = color;
    this.setState({ copied: color });
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    textArea.remove();
  };

  render() {
    return (
      <div>
        <h1>
          {decodeURIComponent(this.props.match.params.song)}
        </h1>
        <Palette
          colors={generateColors(this.state.songInfo)}
          onClick={this.handleClick}
          copied={this.state.copied}
        />
      </div>
    );
  }
}

export default Result;
