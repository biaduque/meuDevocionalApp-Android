import React from 'react';
import {WebView} from 'react-native-webview';

const WebViewScreen = ({route}) => {
  const {url} = route.params;

  //TODO: add botao de voltar
  return <WebView source={{uri: url}} style={{width: '100%', flex: 1}} />;
};

// Lorem

export default WebViewScreen;
