import { createReducer } from 'redux-act';
import { fetchFruits } from 'actions';

const initialState = {
  fruits: [],
};

export default createReducer(
  {
    [fetchFruits]: (state, payload) => ({
      ...state,
      fruits: payload,
    }),
  },
  initialState,
);
