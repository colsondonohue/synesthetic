import React from 'react';
import styled from 'styled-components';
import PropTypes from 'proptypes';

const propTypes = {
  color: PropTypes.string.isRequired
};

const Color = styled.div`
  width: 100%;
  height: 200px;
  background-color: ${props => props.color};

  @media (max-width: 600px) {
    height: 80px;
  }
`;

const Title = styled.p`
  margin: 0.5em 0em 1em;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const ColorWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const ColorCard = ({ color }) =>
  <ColorWrapper>
    <Color color={color} />
    <Title>
      {color}
    </Title>
  </ColorWrapper>;

ColorCard.propTypes = propTypes;

export default ColorCard;
