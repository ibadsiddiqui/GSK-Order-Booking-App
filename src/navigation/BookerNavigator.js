import { Entypo, Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import Colors from '../constants/Colors';
import OrdersScreen from '../screens/Dashboard/OrdersScreen';
import AddNewOrder from '../screens/Dashboard/OrderTab/AddOrder';
import ProductListScreen from '../screens/Dashboard/ProductsTab/ProductsList';
import ListOfShops from '../screens/Dashboard/ShopTab/ListOfShops';

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
    <Entypo color={focused ? Colors.primaryBtn : Colors.tabIconDefault}
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

SettingsStack.navigationOptions = {
  // tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <Ionicons
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
      size={26}
      style={{ marginBottom: -3 }}
      color={focused ? Colors.primaryBtn : Colors.tabIconDefault} />
  ),
};

SettingsStack.path = '';


const AddOrderStack = createStackNavigator(
  {

    AddNewOrder: AddNewOrder,
  },
  config
);

AddOrderStack.navigationOptions = {
  // tabBarLabel: null,
  tabBarIcon: ({ focused }) => (
    <Ionicons
      name="ios-add-circle-outline"
      size={26}
      style={{ marginBottom: -3 }}
      color={focused ? Colors.primaryBtn : Colors.tabIconDefault} />
    // <TabBarIcon focused={focused} name="ios-add-circle-outline" />
  ),
};

AddOrderStack.path = '';

AddNewOrder.tabBarOptions = {
  showLabel: false,
  showIcon: true,
  tintColor: '#333',
  activeTintColor: '#aaa',
}

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

const tabNavigator = createBottomTabNavigator({
  ShopsStack,
  AddOrderStack,
  ProductsStack,
  SettingsStack,
}, {
  tabBarOptions: {
    showLabel: false
  }
});

tabNavigator.path = '';

export default tabNavigator;
