import React from 'react';
import {WebView} from 'react-native-webview';

const WebViewScreen = ({route}) => {
  const {url} = route.params;

  return <WebView source={{uri: url}} style={{width: '100%', flex: 1}} />;
};

export default WebViewScreen;
