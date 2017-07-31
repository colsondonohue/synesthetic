import React from 'react';
import PropTypes from 'proptypes';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const propTypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.string
};

const TitleText = styled.h1`
  font-size: 8vw;
  margin: 1em 0;
  text-align: center;

  @media (max-width: 1100px) {
    font-size: 11vw;
  }

  @media (max-width: 640px) {
    font-size: 15vw;
  }
`;

const TitleLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Title = ({ url, children }) =>
  <TitleLink to={url !== '/' ? '/search' : '/'}>
    <TitleText>
      {children}
    </TitleText>
  </TitleLink>;

Title.propTypes = propTypes;

export default Title;
