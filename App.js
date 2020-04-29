// import { Entypo, Feather, FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
// import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Provider } from "react-redux";
import configureStore from './src/redux/store';

import LoginScreen from './src/screens/LoginScreen';
import DistributorNavigator from './src/navigation/DistributorNavigator';
import BookerDashboard from './src/navigation/BookerNavigator';
import ShopInfoScreen from './src/screens/ShopInfo';
import AddShopScreen from './src/screens/AddShop';
import ProductInfo from './src/screens/ProductInfo';
import AddProductToOrderScreen from './src/screens/AddProductToOder';
import MapViewScreen from './src/screens/MapView';
import AddShopToOrderScreen from './src/screens/AddShopToOrder';
import OrderInfoScreen from './src/screens/OrderInfo'
const store = configureStore();

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  // const { getInitialState } = useLinking(containerRef);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load our initial navigation state
        // setInitialNavigationState(await getInitialState());
        await loadResourcesAsync()
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  const Stack = createStackNavigator();
  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <Provider store={store.store}>
        <View style={styles.container}>
          {Platform.OS === 'android' && <StatusBar hidden />}
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <NavigationContainer ref={containerRef} >
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="LoginScreen" component={LoginScreen} />
              <Stack.Screen name="DistributorDashboard" component={DistributorNavigator} />
              <Stack.Screen name="BookerDashboard" component={BookerDashboard} />
              <Stack.Screen name="AddShop" component={AddShopScreen} />
              <Stack.Screen name="ShopInfo" component={ShopInfoScreen} />
              <Stack.Screen name="ProductInfo" component={ProductInfo} />
              <Stack.Screen name="AddProductToOrder" component={AddProductToOrderScreen} />
              <Stack.Screen name="MapView" component={MapViewScreen} />
              <Stack.Screen name="AddShopToOrder" component={AddShopToOrderScreen} />
              <Stack.Screen name="OrderInfo" component={OrderInfoScreen} />

            </Stack.Navigator>
          </NavigationContainer>
        </View>
      </Provider>
    );
  }
}

async function loadResourcesAsync() {
  await Asset.loadAsync([
    require('./src/assets/images/robot-dev.png'),
    require('./src/assets/images/robot-prod.png'),
    require('./src/assets/images/shop.jpg'),
    require('./src/assets/images/gsk-logo.jpg'),

  ]);
  await Font.loadAsync({
    // This is the font that we are using for our tab bar
    // ...Ionicons.font,
    // ...FontAwesome.font,
    // ...Entypo.font,
    // ...Feather.font,
    // ...MaterialCommunityIcons.font,
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
