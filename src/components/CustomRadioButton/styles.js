import styled from 'styled-components/native';

export const Layout = styled.View`
  width: 100%;
`;

export const WrapperColorButtons = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 20px;
`;

export const Option = styled.Pressable`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border-width: 3px;
  border-color: ${({active}) => (active ? '#485F50' : 'transparent')};
  justify-content: center;
  align-items: center;
  background: ${({background}) => background};
`;
