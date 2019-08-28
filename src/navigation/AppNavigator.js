import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import ProductInfo from '../screens/ProductInfo';
import MainTabNavigator from './MainTabNavigator';


export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: MainTabNavigator,
    ProductInfo: ProductInfo
  })
);
