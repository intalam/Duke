import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import NotifyOnLoad from './NotifyOnLoad';

import FadWebView from './FadWebView';

export default function HomeScreen({ navigation }) {
  return (
    <>
      <NotifyOnLoad/>
      
      <View style={styles.container}>
        <View style={styles.itemContainer}>
          <Text style={styles.item} onPress={() => navigation.navigate('Fad')}>FAD - using shared code</Text>
        </View>
        {/* <View  style={styles.itemContainer}>
          <Text style={styles.item} onPress={() => navigation.navigate('Camera')}>Camera</Text>
        </View> */}
      </View>

      <View style={styles.container}>
        <View style={styles.itemContainer}>
          <Text style={styles.item} onPress={() => navigation.navigate('FAD RenderProp')}>FAD - using RenderProp</Text>
        </View>
        {/* <View style={styles.itemContainer}>
          <Text style={styles.item} onPress={() => navigation.navigate('Notification')}>Notification</Text>
        </View> */}
        {/* <View style={styles.itemContainer}>
          <Text style={styles.item} onPress={() => navigation.navigate('fad-webview')}>FAD - WebView</Text>
        </View> */}
        {/* <FadWebView/> */}
      </View>

      {/* <View style={styles.container}>
        <View style={styles.itemContainer}>
          <Text style={styles.item} onPress={() => navigation.navigate('WebViewUI')}>Open WebView</Text>
        </View>
      </View> */}

      <View style={styles.container}>
        <View style={styles.itemContainer}>
          <Text style={styles.item} onPress={() => navigation.navigate('GeoLocation')}>Show My GeoLocation</Text>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.itemContainer}>
          <Text style={styles.item} onPress={() => navigation.navigate('Camera')}>Camera</Text>
        </View>
      </View>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1, alignItems: 'center', justifyContent: 'center',
    flexDirection: 'row',
  },
  itemContainer: {
    flex: 1, justifyContent: 'space-between',
    width: '80%',
    maxWidth: '100%',
    backgroundColor: '#00539b',
    marginLeft: 10,
    marginRight: 10,
  },
  item: {
    color: '#eee',
    paddingTop: 50,
    paddingBottom: 50,
    fontSize: 20,
    textAlign: "center",
    textAlignVertical: "center",
  }
});