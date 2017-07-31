import React, { Component } from 'react';
import debounce from 'lodash/debounce';
import Centered from '../components/Centered';
import SearchBar from '../components/SearchBar';
import { getToken, searchSongs } from '../api';

class Search extends Component {
  state = {
    token: '',
    songs: []
  };

  componentWillMount() {
    const token = getToken();
    this.setState({ token });
  }

  getSongs = debounce(async value => {
    const songs = await searchSongs(this.state.token, value);
    this.setState({ songs });
  }, 200);

  handleChange = e => {
    this.getSongs(e.target.value);
  };

  handleClick = e => {
    this.props.history.push(`/search/${e.target.title}/${e.target.id}`);
  };

  render() {
    return (
      <Centered>
        <SearchBar
          onChange={this.handleChange}
          onClick={this.handleClick}
          songs={this.state.songs}
        />
      </Centered>
    );
  }
}

export default Search;
