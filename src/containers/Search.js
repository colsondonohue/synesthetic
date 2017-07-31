import React, { Component } from 'react';
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

  handleChange = async e => {
    const songs = await searchSongs(this.state.token, e.target.value);
    this.setState({ songs });
  };

  handleClick = e => {
    this.props.history.push(`/search/${e.target.id}`);
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
