import { Entypo, Foundation, Ionicons } from '@expo/vector-icons';
import React from 'react';
// import { Platform } from 'react-native';
// import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Colors from '../constants/Colors';
import DayEndSaleScreen from '../screens/DistributorDashboard/DayEndSale';
import OrdersScreen from '../screens/DistributorDashboard/OrdersScreen';
import ProductListScreen from '../screens/DistributorDashboard/ProductsTab/ProductsList';
import ListOfShops from '../screens/DistributorDashboard/ShopTab/ListOfShops';

// const config = Platform.select({
//   web: { headerMode: 'screen' },
//   default: {},
// });

// const ShopsStack = createStackNavigator(
//   {
//     ShopList: ListOfShops,
//   },
//   config
// );

// ShopsStack.navigationOptions = {
//   // tabBarLabel: 'Links',
//   tabBarIcon: ({ focused }) => (
//     <Entypo color={focused ? Colors.primaryBtn : Colors.tabIconDefault}
//       name="shop"
//       size={26}
//     />
//   ),
// };

// ShopsStack.path = '';



// const ProductsStack = createStackNavigator(
//   {
//     ProductsList: ProductListScreen,
//   },
//   config
// );

// ProductsStack.navigationOptions = {
//   // tabBarLabel: 'Products',
//   tabBarIcon: ({ focused }) => (
//     // <TabBarIcon focused={focused} name="ios-list" />
//     <Ionicons name="ios-list"
//       size={26} style={{ marginBottom: -3 }}
//       color={focused ? Colors.primaryBtn : Colors.tabIconDefault}
//     />
//   ),
// };

// ProductsStack.path = '';

// const SettingsStack = createStackNavigator(
//   {
//     Settings: OrdersScreen,
//   },
//   config
// );

// SettingsStack.navigationOptions = {
//   // tabBarLabel: 'Settings',
//   tabBarIcon: ({ focused }) => (
//     <Ionicons name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
//       size={26} style={{ marginBottom: -3 }}
//       color={focused ? Colors.primaryBtn : Colors.tabIconDefault}
//     />
//   ),
// };

// SettingsStack.path = '';

// const DayEndSaleStack = createStackNavigator(
//   {
//     DayEndSale: DayEndSaleScreen,
//   },
//   config
// );

// DayEndSaleStack.navigationOptions = {
//   tabBarIcon: ({ focused }) => (
//     <Foundation name="burst-sale" color={focused ? Colors.primaryBtn : Colors.tabIconDefault}
//       size={30} />
//   ),
// };

// DayEndSaleStack.path = '';

// const tabNavigator = createBottomTabNavigator({
//   ShopsStack,
//   ProductsStack,
//   SettingsStack,
//   DayEndSaleStack,
// }, {
//   tabBarOptions: {
//     showLabel: false
//   }
// });

// tabNavigator.path = '';

// export default tabNavigator;


// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import * as React from 'react';

// import TabBarIcon from '../components/TabBarIcon';
// import HomeScreen from '../screens/HomeScreen';
// import LinksScreen from '../screens/LinksScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'RegisteredShops';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen name="RegisteredShops"
        component={ListOfShops}
        options={{
          title: 'Get Started',
          tabBarIcon: ({ focused }) =>
            <Entypo color={focused ? Colors.primaryBtn : Colors.tabIconDefault}
              name="shop"
              size={26}
            />,
        }}
      />
      <BottomTab.Screen name="ProductsList"
        component={ProductListScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            <Ionicons name="ios-list"
              size={26} style={{ marginBottom: -3 }}
              color={focused ? Colors.primaryBtn : Colors.tabIconDefault}
            />
          ,
        }}
      />
      <BottomTab.Screen name="Settings"
        component={OrdersScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            <Ionicons name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
              size={26} style={{ marginBottom: -3 }}
              color={focused ? Colors.primaryBtn : Colors.tabIconDefault}
            />
          ,
        }}
      />
      <BottomTab.Screen name="DayEndSale"
        component={DayEndSaleScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            <Foundation name="burst-sale" color={focused ? Colors.primaryBtn : Colors.tabIconDefault}
              size={30} />
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'How to get started';
    case 'Links':
      return 'Links to learn more';
  }
}
