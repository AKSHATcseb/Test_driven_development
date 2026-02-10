const calculateTotal = require('./cart');

test("calculate total price of cart items", () => {
  const cart = [
    { price: 100, quantity: 2 },
    { price: 50, quantity: 1 }
  ];

  expect(calculateTotal(cart)).toBe(250);
});
