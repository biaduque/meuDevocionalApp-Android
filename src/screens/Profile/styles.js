import styled from "styled-components/native"

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding-top: 28px;
`;

export const WrapperHeader = styled.View`
  padding-top: 24px;
  flex-direction: row;
  align-items: center;
`;

export const TextTitle = styled.Text`
  font-size: 26px;
  font-weight: 700;
`;

export const WrapperProfile = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
`;

export const ProfileImage = styled.Image`
  width: 130px;
  height: 130px;
  border-radius: 500px;
`;

export const Username = styled.Text`
  font-size: 24px;
  margin-top: 15px;
  font-weight: 600;
`;

export const WrapperMenu = styled.View`
  flex-direction: column;
  margin-top: 24px;
`;

export const ButtonWrapper = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  padding: 15px 24px;
  border-bottom-color: #F2F4F6;
  border-bottom-width: 1px;
`;

export const LeftWrapperButton = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  margin-left: 10px;
`;