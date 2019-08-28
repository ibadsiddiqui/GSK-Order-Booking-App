import { combineReducers, createStore } from "redux";
// import { persistStore, persistReducer } from "redux-persist";
// defaults to localStorage AsyncStorage for react-native
// import storage from "redux-persist/lib/storage"; 
import OrdersReducer from './../reducers/OrdersReducer';

const rootReducer = combineReducers({
  //   PIN: PINReducer,
  orders: OrdersReducer,
  products: ProductsReducer,
  //   Registration: RegistrationReducer,
  //   Users: UsersReducer,
  //   Currencies: CurrenciesReducer,
  //   Receiver: ReceiversReducer
});

const configureStore = () => {
  let store = createStore(rootReducer);
  return { store };
};

export default configureStore;