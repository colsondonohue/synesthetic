import React, { Component } from 'react';
import PropTypes from 'proptypes';
import { getToken } from '../api';
import Palette from '../components/Palette';

class Result extends Component {
  static propTypes = {};
  render() {
    return (
      <div>
        <h2>Result</h2>
        <Palette
          colors={['#000fb7', '#9400a2', '#f5d1e6', '#e16973', '#00b8a9']}
        />
      </div>
    );
  }
}

export default Result;
