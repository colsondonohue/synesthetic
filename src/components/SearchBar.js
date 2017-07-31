import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'proptypes';
import Input from './Input';
import SearchItems from './SearchItems';

const SearchBarContainer = styled.div`
  width: 70%;

  @media (max-width: 1000px) {
    width: 85%;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const propTypes = {
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  songs: PropTypes.array.isRequired
};

class SearchBar extends Component {
  componentDidMount() {
    this.input.focus();
  }
  render() {
    const { songs, onChange, onClick } = this.props;
    return (
      <SearchBarContainer>
        <Input
          onChange={onChange}
          innerRef={comp => {
            this.input = comp;
          }}
        />
        <SearchItems onClick={onClick} songs={songs} />
      </SearchBarContainer>
    );
  }
}

SearchBar.propTypes = propTypes;

export default SearchBar;
