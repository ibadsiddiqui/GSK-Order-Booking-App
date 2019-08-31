import { combineReducers, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'

import OrdersReducer from './../reducers/OrdersReducer';
import ProductsReducer from "../reducers/ProductsReducer";
import ShopsReducer from "../reducers/ShopsReducer";

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  orders: OrdersReducer,
  products: ProductsReducer,
  shops: ShopsReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

const configureStore = () => {
  let store = createStore(persistedReducer)
  let persistor = persistStore(store)
  return { store, persistor }
}

export default configureStore;