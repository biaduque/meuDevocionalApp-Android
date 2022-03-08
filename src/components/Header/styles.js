import styled from 'styled-components/native';

export const Layout = styled.View`
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #f5faf6;
`;

export const Container = styled.View`
  width: 100%;
  height: 100%;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

export const ProfileImage = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 500px;
`;
