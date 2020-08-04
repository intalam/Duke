import React from 'react';

import { WebView } from 'react-native-webview';

const FadWebView = (props) => {

  return (
    <>
      <WebView source={{ uri: 'https://www.dukehealth.org/find-doctors-physicians' }} style={{ marginTop: 30 }} />
    </>
  )
};


export default FadWebView;