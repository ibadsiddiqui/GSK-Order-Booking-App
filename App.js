import { Entypo, Feather, FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Provider } from "react-redux";
import AppNavigator from './src/navigation/AppNavigator';
import configureStore from './src/redux/store';

const store = configureStore();

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <Provider store={store.store}>
        <StatusBar hidden />
        <AppLoading
          startAsync={loadResourcesAsync}
          onError={handleLoadingError}
          onFinish={() => handleFinishLoading(setLoadingComplete)}
        />
      </Provider>
    );
  } else {
    return (
      <Provider store={store.store}>
        <View style={styles.container}>
          {Platform.OS === 'android' && <StatusBar hidden />}
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator />
        </View>
      </Provider>
    );
  }
}

async function loadResourcesAsync() {
  await Asset.loadAsync([
    require('./src/assets/images/robot-dev.png'),
    require('./src/assets/images/robot-prod.png'),
  ]);
  await Font.loadAsync({
    // This is the font that we are using for our tab bar
    ...Ionicons.font,
    ...FontAwesome.font,
    ...Entypo.font,
    ...Feather.font,
    ...MaterialCommunityIcons.font,
    // We include SpaceMono because we use it in HomeScreen.js. Feel free to
    // remove this if you are not using it in your app
    'space-mono': require('./src/assets/fonts/SpaceMono-Regular.ttf'),
  });
  // return true
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
