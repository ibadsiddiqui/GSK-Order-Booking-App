import { Entypo, Foundation } from '@expo/vector-icons';
import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import Colors from '../constants/Colors';
import DayEndSaleScreen from '../screens/DistributorDashboard/DayEndSale';
import OrdersScreen from '../screens/DistributorDashboard/OrdersScreen';
import ProductListScreen from '../screens/DistributorDashboard/ProductsTab/ProductsList';
import ListOfShops from '../screens/DistributorDashboard/ShopTab/ListOfShops';

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

const SettingsStack = createStackNavigator(
  {
    Settings: OrdersScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  // tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';

const DayEndSaleStack = createStackNavigator(
  {
    DayEndSale: DayEndSaleScreen,
  },
  config
);

DayEndSaleStack.navigationOptions = {
  // tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <Foundation name="burst-sale" color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      size={26} />
  ),
};

DayEndSaleStack.path = '';

const tabNavigator = createBottomTabNavigator({
  ShopsStack,
  ProductsStack,
  SettingsStack,
  DayEndSaleStack,
}, {
    tabBarOptions: {
      showLabel: false
    }
  });

tabNavigator.path = '';

export default tabNavigator;