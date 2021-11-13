//exporting module
console.log("Exporting module");

//variables scoped to the module inside the module module itself is top level scope private inside the module
const shippingCost = 10;
const cart = [];

//named export has to happen in top level code
export const addToCart = function (product, quantity) {
  cart.push(product, quantity);
  console.log(`${quantity} ${product} added to cart`);
  console.log(cart);
};

//export multiple things from a module using names exports

const totalPrice = 237;
