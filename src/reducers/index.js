import { combineReducers } from 'redux';
import fruits from 'reducers/fruits';
import cart from 'reducers/cart';

const rootReducer = combineReducers({
  fruits,
  cart,
});

export default rootReducer;
