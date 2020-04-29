import { Entypo, Ionicons,Foundation } from '@expo/vector-icons';
import React from 'react';
// import { Platform } from 'react-native';
// import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import TabBarIcon from '../components/TabBarIcon';
import Colors from '../constants/Colors';
import OrdersScreen from '../screens/Dashboard/OrdersScreen';
import AddNewOrder from '../screens/Dashboard/OrderTab/AddOrder';
import ProductListScreen from '../screens/Dashboard/ProductsTab/ProductsList';
import ListOfShops from '../screens/Dashboard/ShopTab/ListOfShops';

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

// const SettingsStack = createStackNavigator(
//   {
//     Settings: OrdersScreen,
//   },
//   config
// );

// SettingsStack.navigationOptions = {
//   // tabBarLabel: 'Settings',
//   tabBarIcon: ({ focused }) => (
//     <Ionicons
//       name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
//       size={26}
//       style={{ marginBottom: -3 }}
//       color={focused ? Colors.primaryBtn : Colors.tabIconDefault} />
//   ),
// };

// SettingsStack.path = '';


// const AddOrderStack = createStackNavigator(
//   {

//     AddNewOrder: AddNewOrder,
//   },
//   config
// );

// AddOrderStack.navigationOptions = {
//   // tabBarLabel: null,
//   tabBarIcon: ({ focused }) => (
//     <Ionicons
//       name="ios-add-circle-outline"
//       size={26}
//       style={{ marginBottom: -3 }}
//       color={focused ? Colors.primaryBtn : Colors.tabIconDefault} />
//     // <TabBarIcon focused={focused} name="ios-add-circle-outline" />
//   ),
// };

// AddOrderStack.path = '';

// AddNewOrder.tabBarOptions = {
//   showLabel: false,
//   showIcon: true,
//   tintColor: '#333',
//   activeTintColor: '#aaa',
// }

// const ProductsStack = createStackNavigator(
//   {
//     ProductsList: ProductListScreen,
//   },
//   config
// );

// ProductsStack.navigationOptions = {
//   // tabBarLabel: 'Products',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon focused={focused} name="ios-list" />
//   ),
// };

// ProductsStack.path = '';

// const tabNavigator = createBottomTabNavigator({
//   ShopsStack,
//   AddOrderStack,
//   ProductsStack,
//   SettingsStack,
// }, {
//   tabBarOptions: {
//     showLabel: false
//   }
// });

// tabNavigator.path = '';

// export default tabNavigator;


const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'ShopList';

export default function BottomTabNavigator({ navigation, route }) {
    // Set the header title on the parent stack navigator depending on the
    // currently active tab. Learn more in the documentation:
    // https://reactnavigation.org/docs/en/screen-options-resolution.html

    return (
        <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
            <BottomTab.Screen name="ShopList"
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
            <BottomTab.Screen name="AddNewOrder"
                component={AddNewOrder}
                options={{
                    tabBarIcon: ({ focused }) =>
                        <Ionicons
                            name="ios-add-circle-outline"
                            size={26}
                            style={{ marginBottom: -3 }}
                            color={focused ? Colors.primaryBtn : Colors.tabIconDefault} />
                }}
            />
            <BottomTab.Screen name="ProductsList"
                component={ProductListScreen}
                options={{
                    tabBarIcon: ({ focused }) =>
                        <Foundation name="burst-sale" color={focused ? Colors.primaryBtn : Colors.tabIconDefault}
                            size={30} />
                }}
            />
            <BottomTab.Screen name="Settings"
                component={OrdersScreen}
                options={{
                    tabBarIcon: ({ focused }) =>
                        <Ionicons
                            name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
                            size={26}
                            style={{ marginBottom: -3 }}
                            color={focused ? Colors.primaryBtn : Colors.tabIconDefault} />
                    ,
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
