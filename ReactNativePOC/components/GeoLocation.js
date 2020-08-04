import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import * as Location from 'expo-location';

export default function GeoLocation(props) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  });

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    //text = JSON.stringify(location);
    text = location;
  }

  return (
    <View style={styles.container}>
      {
        (typeof text === 'string') && <>
          <Text>{text}</Text>
        </>
      }
      {
        (Object.prototype.toString.call(text) === '[object Object]') && <>
          <Text>Timestamp: {text.timestamp}</Text>

          <Text style={styles.lat}>lat: {text.coords.latitude}</Text>
          <Text style={styles.lat}>long: {text.coords.longitude}</Text>
          <Text>heading: {text.coords.heading}</Text>

          <Text>All Raw: {JSON.stringify(text)}</Text>
        </>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  lat: {
    fontSize: 20,
    backgroundColor: '#00539b',
    color: '#fff',
    paddingBottom: 20,
    paddingTop: 20,
    width: '100%',
    paddingLeft: 20,
  },
  long: {
    fontSize: 20,
  },
});