function calculateTotal(cart) {
  let total = 0;

  for (let item of cart) {
    total += item.price * item.quantity;
  }

  return total;
}

module.exports = calculateTotal;










