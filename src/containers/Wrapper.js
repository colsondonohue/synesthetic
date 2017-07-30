import React, { Component } from 'react';
import PropTypes from 'proptypes';
import Title from '../components/Title';
import Layout from '../components/Layout';

class Wrapper extends Component {
  static props = {
    children: PropTypes.object.isRequired
  };
  render() {
    return (
      <Layout>
        <Title>synesthetic</Title>
        {this.props.children}
      </Layout>
    );
  }
}

export default Wrapper;
