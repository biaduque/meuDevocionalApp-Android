import styled from 'styled-components/native';

export const Layout = styled.View `
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
  justify-content: center;
  align-items: center;
  padding: 48px 0;
`;

export const DotWrapper = styled.View `
  background-color: ${({theme}) =>
    theme.createDevotionalModal.footerBackground};
  width: 8px;
  height: 8px;
  border-radius: 4px;
  margin: 20px 5px;
`;

export const ActiveDotWrapper = styled.View `
  background-color: ${({theme}) => theme.colors.accent};
  width: 8px;
  height: 8px;
  border-radius: 4px;
  margin: 20px 5px;
`;

export const Content = styled.View `
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 0 48px;
`;

export const Image = styled.Image.attrs({
    resizeMode: 'contain',
})
`
  width: 300px;
  height: 250px;
`;

export const TextPresentation = styled.Text `
  font-size: 20px;
  margin-top: 48px;
  color: ${({theme}) => theme.colors.titlePrimary};
`;