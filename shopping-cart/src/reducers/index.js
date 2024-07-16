import { combineReducers } from 'redux';
import productReducer from './productReducers';
import cartReducer from './cartReducer';
import menReducer from './menReducer';
import womenReducer from './womenReducer';
import kidsReducer from './kidsReducers';

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  men: menReducer,
  women: womenReducer,
  kids: kidsReducer,
});

export default rootReducer;
