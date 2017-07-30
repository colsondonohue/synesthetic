import styled from 'styled-components';

const Button = styled.button`
  color: white;
  border-radius: 50vw;
  border: none;
  padding: 1.5em;
  font-size: 1.5vw;
  cursor: pointer;
  background: #427ea7; /* fallback for old browsers */
  background: linear-gradient(to right, #427ea7, #9a62b1);
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 1s ease;

  &:focus,
  &:hover {
    outline: none;
    background: #2b5876; /* fallback for old browsers */
    background: linear-gradient(to right, #4e4376, #2b5876);
  }

  @media (max-width: 1100px) {
    font-size: 3vw;
  }

  @media (max-width: 640px) {
    font-size: 4vw;
  }
`;

export default Button;
