import styled from 'styled-components';

const Title = styled.h1`
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

export default Title;
