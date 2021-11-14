//exporting module
console.log("Exporting module");

//variables scoped to the module inside the module module itself is top level scope private inside the module
export const shippingCost = 10;
export const cart = [];

//named export has to happen in top level code
export const addToCart = function (product, quantity) {
  cart.push(product, quantity);
  console.log(`${quantity} ${product} added to cart`);
  console.log(cart);
  console.log;
};

//export multiple things from a module using names exports

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as qt };
//export variables, like exporting objects from this module

//default export ONE thing per module export value itself not variable
// export default function (product, quantity) {
//   cart.push(product, quantity);
//   console.log(`${quantity} ${product} added to cart`);
//   console.log(cart);
// }
