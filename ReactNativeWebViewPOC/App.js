import React from 'react';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <>
      <WebView source={{ uri: 'https://www.dukehealth.org/find-doctors-physicians' }} style={{ marginTop: 30 }} />
    </>
  );
}