import { createAction } from 'redux-act';

export const addFruitToCart = createAction('Add Fruit To Cart');
export const removeFruitFromCart = createAction('Remove Fruit From Cart');
export const cleanCart = createAction('Clean Cart');
