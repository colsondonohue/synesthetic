import React, { Component } from 'react';
import PropTypes from 'proptypes';
import { getToken } from '../api';

class Result extends Component {
  static propTypes = {};
  render() {
    return (
      <div>
        <h2>Result</h2>
        <p>
          Token: {getToken()}
        </p>
      </div>
    );
  }
}

export default Result;
