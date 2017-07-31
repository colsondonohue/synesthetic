import React from 'react';
import styled from 'styled-components';
import PropTypes from 'proptypes';
import ColorCard from './ColorCard';

const propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired
};

const ColorContainer = styled.section`
  display: flex;
  flex-direction: row;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Palette = ({ colors }) =>
  <ColorContainer>
    {colors.map(color => <ColorCard color={color} key={color} />)}
  </ColorContainer>;

Palette.propTypes = propTypes;

export default Palette;
