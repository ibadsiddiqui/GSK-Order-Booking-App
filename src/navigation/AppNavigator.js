import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import MapViewScreen from '../screens/MapView';
import ProductInfo from '../screens/ProductInfo';
import AddProductToOrderScreen from './../screens/AddProductToOder';
import MainTabNavigator from './MainTabNavigator';

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: MainTabNavigator,
    ProductInfo: createStackNavigator({ screen: ProductInfo }),
    AddProductToOrder: createStackNavigator({ screen: AddProductToOrderScreen }),
    MapView: MapViewScreen,
  })
);
