import { combineReducers } from 'redux';
import productsReducer from './productReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

export default rootReducer;