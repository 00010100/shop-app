import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import fruits from 'reducers/fruits';
import cart from 'reducers/cart';

const rootReducer = combineReducers({
  routing: routerReducer,
  fruits,
  cart,
});

export default rootReducer;
