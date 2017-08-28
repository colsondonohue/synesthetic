import React from 'react';
import styled from 'styled-components';
import PropTypes from 'proptypes';
import ColorCard from './ColorCard';

const propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
  copied: PropTypes.string.isRequired
};

const ColorContainer = styled.section`
  display: flex;
  flex-direction: row;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Palette = ({ colors, onClick, copied }) =>
  <ColorContainer>
    {colors.map((color, i) =>
      <ColorCard color={color} onClick={onClick} copied={copied} key={i} />
    )}
  </ColorContainer>;

Palette.propTypes = propTypes;

export default Palette;
