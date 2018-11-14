export const getFruits = (state) => [state.fruits];

export const getTotalCartCount = (state) => state.cart.length;

export const getTotalCartPrice = (state) => {
  const fruits = state.cart;

  let price = 0;
  let counter = 0;

  for (let i = 0; i < fruits.length; i++) {
    if (fruits[i].name === 'Papaya') {
      counter++;
      if (counter % 3 === 0) {
        price += 0;
      } else {
        price += fruits[i].price;
      }
    } else {
      price += fruits[i].price;
    }
  }

  return price;
};
