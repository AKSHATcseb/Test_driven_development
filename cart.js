function calculateTotal(cart) {
  return cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
}
module.exports = calculateTotal;















// function calculateTotal(cart) {
//   let total = 0;

//   for (let item of cart) {
//     total += item.price * item.quantity;
//   }

//   return total;
// }

// module.exports = calculateTotal;










