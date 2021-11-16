//exporting module
console.log("Exporting module");

//variables scoped to the module inside the module module itself is top level scopeprivate inside the module

//blocking code cod in script.js has to wait for code in shopping cart js to finish
console.log("blocking code");

await fetch("https://jsonplaceholder.typicode.com/users");

console.log("Finish fetching users");

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

//OLD MODULE PATTERN

//main goal is to encapsulate functinoality to have private data and to expose a public api
//functions return values and give private data by default
//use iffe
//only call it once don't call it seperately

(function () {
  //creat a new scope and return data just once
  const cart = [];
})();
