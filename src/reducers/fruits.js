import { createReducer } from 'redux-act';
import { fetchFruits } from 'actions';

const initialState = [];

export default createReducer(
  {
    [fetchFruits]: (state, payload) => [...state, ...payload],
  },
  initialState,
);
