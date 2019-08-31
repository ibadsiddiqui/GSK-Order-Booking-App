import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import AddShopScreen from '../screens/AddShop';
import AddShopToOrderScreen from '../screens/AddShopToOrder';
import MapViewScreen from '../screens/MapView';
import ProductInfo from '../screens/ProductInfo';
import ShopInfoScreen from '../screens/ShopInfo';
import AddProductToOrderScreen from './../screens/AddProductToOder';
import MainTabNavigator from './MainTabNavigator';

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: MainTabNavigator,
    ProductInfo: ProductInfo,
    ShopInfo: ShopInfoScreen,
    AddProductToOrder: createStackNavigator({ screen: AddProductToOrderScreen }),
    AddShopToOrder: createStackNavigator({ AddShopToOrderScreen }),
    MapView: MapViewScreen,
    AddShop: createStackNavigator({ screen: AddShopScreen })

  })
);
