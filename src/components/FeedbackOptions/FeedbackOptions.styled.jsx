import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: 10px;
  width: 100px;
  height: 50px;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  background-color: rgb(243, 254, 254);

  border-radius: 8px;
  cursor: pointer;

  box-shadow: 0px 2px 5px 0px rgba(62, 118, 120, 1);
  transition: transform 100ms ease-in-out;

  :hover {
    box-shadow: 1px 3px 5px 0px rgba(150, 150, 150, 1);
    transform: translate(-2px, -2px);
  }
`;
