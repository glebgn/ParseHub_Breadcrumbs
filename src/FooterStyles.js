
import styled from 'styled-components';
   
export const Box = styled.div`
  background: black;
  position: absolute;
  bottom: 0;
  width: 100%;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;
   

   
export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;