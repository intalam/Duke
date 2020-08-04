import * as React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from './shared/redux/reducer';

import HomeScreen from './components/Home';
import Camera from './components/Camera';

import Doctors from './components/doctors';
import DoctorRenderProp from './components/DoctorRenderProp';
import DoctorProfile from './components/DoctorProfile';
import WebViewUI from './components/WebViewUI';
import GeoLocation from './components/GeoLocation';

let store = createStore(reducer);


const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Fad" component={Doctors} />
          <Stack.Screen name="Camera" component={Camera} />
          <Stack.Screen name="FAD RenderProp" component={DoctorRenderProp} />
          <Stack.Screen name="Doctor Profile" component={DoctorProfile} />
          <Stack.Screen
            name="WebViewUI"
            component={WebViewUI}
            options={{
              headerTintColor: "green",
              title: "WebViewUI",
            }}
          />
          <Stack.Screen name="GeoLocation" component={GeoLocation} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  text: {
    fontSize: 26,
    /* textBreakStrategy: 'simple', */
  }
});
