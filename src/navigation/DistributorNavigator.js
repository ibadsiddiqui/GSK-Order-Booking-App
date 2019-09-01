import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import ProductListScreen from '../screens/DistributorDashboard/ProductsTab/ProductsList';
import ListOfShops from '../screens/DistributorDashboard/ShopTab/ListOfShops';
import { Entypo } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import OrdersScreen from '../screens/DistributorDashboard/OrdersScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const ShopsStack = createStackNavigator(
  {
    ShopList: ListOfShops,
  },
  config
);

ShopsStack.navigationOptions = {
  // tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <Entypo color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      name="shop"
      size={26}
    />
  ),
};

ShopsStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: OrdersScreen,
  },
  config
);

const ProductsStack = createStackNavigator(
  {
    ProductsList: ProductListScreen,
  },
  config
);

ProductsStack.navigationOptions = {
  // tabBarLabel: 'Products',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name="ios-list" />
  ),
};

ProductsStack.path = '';

SettingsStack.navigationOptions = {
  // tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';


const tabNavigator = createBottomTabNavigator({
  ShopsStack,
//   AddOrderStack,
  ProductsStack,
  SettingsStack,
}, {
    tabBarOptions: {
      showLabel: false
    }
  });

tabNavigator.path = '';

export default tabNavigator;
