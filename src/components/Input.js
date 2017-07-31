import styled from 'styled-components';

const Input = styled.input`
  display: inline-block;
  border: none;
  font-size: 2em;
  border-bottom: 1px solid slategrey;
  width: 100%;

  &:focus,
  &:hover {
    outline: none;
  }
`;

export default Input;
