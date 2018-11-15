import { createReducer } from 'redux-act';
import { addFruitToCart, removeFruitFromCart, cleanCart } from 'actions';

const initialState = [];

export default createReducer(
  {
    [addFruitToCart]: (state, payload) => [...state, payload],
    [removeFruitFromCart]: (state, payload) => state.filter((item) => item.id !== payload),
    [cleanCart]: () => [],
  },
  initialState,
);
