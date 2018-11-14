import { createReducer } from 'redux-act';
import { addFruitToCart } from 'actions';

const initialState = [];

export default createReducer(
  {
    [addFruitToCart]: (state, payload) => [...state, payload],
  },
  initialState,
);
