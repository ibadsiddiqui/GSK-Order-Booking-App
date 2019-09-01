import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import AddNewOrder from '../screens/Dashboard/OrderTab/AddOrder';
import ProductListScreen from '../screens/Dashboard/ProductsTab/ProductsList';
import ListOfShops from '../screens/Dashboard/ShopTab/ListOfShops';
import { Entypo } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import OrdersScreen from '../screens/Dashboard/OrdersScreen';

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

const AddOrderStack = createStackNavigator(
  {

    AddNewOrder: AddNewOrder,
  },
  config
);

AddOrderStack.navigationOptions = {
  // tabBarLabel: null,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name="ios-add-circle-outline" />
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

SettingsStack.navigationOptions = {
  // tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';


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
