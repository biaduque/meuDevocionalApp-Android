import styled from 'styled-components/native';

export const Layout = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: #cbe5d1;
`;

export const WrapperWelcome = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: #cbe5d1;
  height: 100%;
  max-height: 50%;
`;

export const WrapperBottom = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  background: #fff;
  height: 100%;
  max-height: 50%;
  padding: 20px;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
`;

export const Description = styled.Text`
  font-size: 20px;
  color: #666;
  text-align: left;
  margin-top: 10px;
`;

export const Title = styled.Text`
  font-size: 42px;
  font-weight: 700;
  color: #000;
  text-align: left;
`;

export const Image = styled.Image`
  width: 100%;
  height: 200px;
  margin-left: 26px;
`;

export const WrapperButton = styled.View`
  background: #1c31a2;
  border-radius: 5px;
  min-height: 48px;
  width: 150px;
  justify-content: center;
  align-items: center;
`;

export const TextButton = styled.Text`
  font-size: 18px;
  font-weight: 600;
`;
