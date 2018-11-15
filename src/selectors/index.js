import * as _ from 'lodash';

export const getFruits = (state) => state.fruits.fruits;

export const getFruitById = (state, id) => _.filter(state.cart, id);

export const getTotalCartCount = (state) => _.size(state.cart);

export const getTotalCartPrice = (state) => {
  let price = 0;
  let counter = 0;

  _.map(state.cart, (item) => {
    if (item.sale) {
      counter++;

      if (counter % 3 === 0) {
        price += 0;
      } else {
        price += item.price;
      }
    } else {
      price += item.price;
    }
  });

  return price;
};

export const getCartFruitsWithCount = (state) => {
  const unique = _.uniqBy(state.cart, 'id');

  const fruitCount = (id) => _.filter(state.cart, ['id', id]).length;

  const fruitWithCount = (fruit) => ({
    ...fruit,
    count: fruitCount(fruit.id),
  });

  const fruits = _.map(_.unionBy(unique, (item) => getFruitById(state, item.id)), fruitWithCount);

  return fruits;
};
