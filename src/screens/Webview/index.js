import React from 'react';
import {WebView} from 'react-native-webview';
import {BackIcon, Header, Layout, Title, WrapperBrowser} from './styles';

const WebViewScreen = ({route}) => {
  const {url} = route.params;

  return (
    <Layout>
      <Header>
        <BackIcon onPress={() => {}} />
        <Title>Worship Time</Title>
      </Header>

      <WrapperBrowser>
        <WebView
          source={{
            uri: url,
          }}
          style={{flex: 1}}
        />
      </WrapperBrowser>
    </Layout>
  );
};

export default WebViewScreen;
