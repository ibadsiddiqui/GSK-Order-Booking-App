import { combineReducers, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import {AsyncStorage} from 'react-native';
import OrdersReducer from './../reducers/OrdersReducer';
import ProductsReducer from "../reducers/ProductsReducer";
import ShopsReducer from "../reducers/ShopsReducer";
import UserReducer from "../reducers/UserReducer";

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const rootReducer = combineReducers({
  orders: OrdersReducer,
  products: ProductsReducer,
  shops: ShopsReducer,
  user: UserReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

const configureStore = () => {
  let store = createStore(persistedReducer)
  let persistor = persistStore(store)
  return { store, persistor }
}

export default configureStore;