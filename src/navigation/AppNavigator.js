import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import AddShopScreen from '../screens/AddShop';
import AddShopToOrderScreen from '../screens/AddShopToOrder';
import MapViewScreen from '../screens/MapView';
import ProductInfo from '../screens/ProductInfo';
import ShopInfoScreen from '../screens/ShopInfo';
import AddProductToOrderScreen from './../screens/AddProductToOder';
import BookerNavigator from './BookerNavigator';
import DistributorNavigator from './DistributorNavigator';
import OrderInfo from '../screens/OrderInfo';
import LoginScreen from '../screens/LoginScreen';

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    LoginScreen: LoginScreen,
    DistributorDashboard: DistributorNavigator,
    BookerDashboard: BookerNavigator,
    ProductInfo: ProductInfo,
    ShopInfo: ShopInfoScreen,
    AddProductToOrder: createStackNavigator({ screen: AddProductToOrderScreen }),
    AddShopToOrder: createStackNavigator({ AddShopToOrderScreen }),
    MapView: MapViewScreen,
    AddShop: createStackNavigator({ screen: AddShopScreen }),
    OrderInfo: OrderInfo,
  })
);
