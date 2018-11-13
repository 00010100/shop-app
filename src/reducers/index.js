import { combineReducers } from 'redux';
import fruits from 'reducers/fruits';

const rootReducer = combineReducers({
  fruits,
});

export default rootReducer;
