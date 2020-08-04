import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import * as Permissions from 'expo-permissions';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      const statusRoll = await Permissions.getAsync(Permissions.CAMERA_ROLL);
      setHasPermission(status === 'granted');
      if (statusRoll.status !== 'granted') {
        const newPermission = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (newPermission.status === 'granted') {
          //its granted.
        }
      }

    })();

  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  async function capture() {
    try {
      cameraRef.current.takePictureAsync({
        skipProcessing: true,
        onPictureSaved: (photo) => {
          (async () => {
            console.log('image saved', photo);
            const asset = await MediaLibrary.createAssetAsync(photo.uri);
            console.log('assets -- ', asset);
          })();
        }
      })
        .then(data => {
          console.log('image captured data', data);
        })
        .catch(err => {
          console.log(err);
        })
    } catch (e) {
      console.log('error', e);
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera ref={cameraRef} style={{ flex: 1 }} type={type} useCamera2Api={true}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: 'flex-end',
              alignItems: 'center',
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flex: 1,
              alignSelf: 'flex-end',
              alignItems: 'center',
            }}
            onPress={() => {
              capture();
            }}>
            <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Capture </Text>
          </TouchableOpacity>


        </View>
      </Camera>
    </View>
  );
}