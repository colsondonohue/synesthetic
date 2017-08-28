import React from 'react';
import styled from 'styled-components';
import PropTypes from 'proptypes';

const propTypes = {
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  copied: PropTypes.string.isRequired
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
  position: relative;

  :hover {
    cursor: pointer;
  }
`;

const CopyText = styled.div`
  border-radius: 5em;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -80%);
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 1em;
  font-size: 0.6em;
  opacity: 0;
  transition: 0.2s all ease-in-out;
  text-align: center;

  ${ColorWrapper}:hover & {
    transform: translate(-50%, calc(-50% - 2em));
    opacity: 1;
  }
`;

const ColorCard = ({ color, onClick, copied }) =>
  <ColorWrapper onClick={onClick}>
    <Color color={color} title={color} />
    <Title title={color}>
      {color}
    </Title>
    <CopyText title={color}>
      {copied === color ? 'Copied!' : 'Click to Copy'}
    </CopyText>
  </ColorWrapper>;

ColorCard.propTypes = propTypes;

export default ColorCard;
