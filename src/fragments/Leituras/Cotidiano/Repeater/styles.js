import styled from 'styled-components/native';

export const WrapperLeitura = styled.View`
  justify-content: space-between;
  margin-right: 10px;
  background-color: #89a091;
  min-width: 300px;
  max-width: 300px;
  border-radius: 10px;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 100%;
  height: 150px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const Description = styled.Text`
  font-size: 18px;
  line-height: 32px;
  padding: 16px;
  color: #fff;
`;

export const FooterWrapper = styled.View`
  background: #f9d9a1;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 10px 16px;
`;

export const Title = styled.Text`
  font-weight: 700;
  font-size: 20px;
  color: #485f50;
`;

export const RefBiblia = styled.Text`
  font-weight: 400;
  font-size: 14px;
  opacity: 0.5;
  color: #485f50;
`;
