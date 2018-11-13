import { createReducer } from 'redux-act';
import { fetchFruits } from 'actions';

const initialState = {
  fruits: null,
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
