// import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
// import AddShopScreen from '../screens/AddShop';
// import AddShopToOrderScreen from '../screens/AddShopToOrder';
// import MapViewScreen from '../screens/MapView';
// import ProductInfo from '../screens/ProductInfo';
// import ShopInfoScreen from '../screens/ShopInfo';
// import AddProductToOrderScreen from './../screens/AddProductToOder';
// import BookerNavigator from './BookerNavigator';
// import DistributorNavigator from './DistributorNavigator';
// import OrderInfo from '../screens/OrderInfo';
import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator();
export default (
    <>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      {/* <Stack.Screen name="DistributorDashboard" component={DistributorNavigator} />
      <Stack.Screen name="BookerDashboard" component={BookerDashboard} />
      <Stack.Screen name="ShopInfo" component={ShopInfoScreen} /> */}
      {/* <Stack.Screen name="AddProductToOrder" component={
        // <Stack.Navigator>
        //   <Stack.Screen component={AddProductToOrderScreen} />
        // </Stack.Navigator>
        AddProductToOrderScreen
      } /> */}
      {/* <Stack.Screen name="AddProductToOrder" component={
        // <Stack.Navigator>
        //   <Stack.Screen component={AddProductToOrderScreen} />
        // </Stack.Navigator>
        AddShopToOrder
      } /> */}

      {/* <Stack.Screen name="MapView" component={MapViewScreen} /> */}

      {/* <Stack.Screen name="AddShop" component={AddShopScreen} /> */}

      {/* <Stack.Screen name="OrderInfo" component={OrderInfo} /> */}

      {/* {
        createStackNavigator({
          // You could add another route here for authentication.
          // Read more at https://reactnavigation.org/docs/en/auth-flow.html
          - LoginScreen: LoginScreen,
          - DistributorDashboard: DistributorNavigator,
          - BookerDashboard: BookerNavigator,
          - ProductInfo: ProductInfo,
          - ShopInfo: ShopInfoScreen,
          AddProductToOrder: createStackNavigator({ screen: AddProductToOrderScreen }),
          AddShopToOrder: createStackNavigator({ AddShopToOrderScreen }),
          MapView: MapViewScreen,
          - AddShop: createStackNavigator({ screen: AddShopScreen }),
          OrderInfo: OrderInfo,
        }, {
          defaultNavigationOptions: {
            header: null
          },
        })
      } */}
    </>

);
