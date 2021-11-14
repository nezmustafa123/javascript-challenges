//Importing module
//import with the path of the module in a string
// import "./shoppingCart.js";
// import { addToCart, totalPrice as price, qt } from "./shoppingCart.js"; //exact same variable name in curly braces
// addToCart("bread", 6);
// console.log(price, qt);
// import * as ShoppingCart from "./shoppingCart.js"; //creates object containing everthing
//import everything as name space like importing an object
// console.log("Importing module");
//exported code is parsed and executed BEFORE the script it's imported into
//statements are hoiseted to the top

//console.log(shippingCost); //can't access variable
//can't use it in this file need named exports

//use object
// console.log(ShoppingCart.totalPrice);
// console.log(ShoppingCart.shippingCost);

// ShoppingCart.addToCart("bread", 6);
// console.log(ShoppingCart.totalPrice);
//also access properties as if it's a class
// import * as ShoppingCart from "./shoppingCart"; //creates object containing everthing
import * as ShoppingCart from "./shoppingCart.js"; //creates object containing everthing

//can give any name you want because default export
// import add, { cart } from "./shoppingCart.js";
addToCart("pizza", 2);
addToCart("bread", 5);
addToCart("apples", 4); //live conntection keep pushing values to array
console.log(price);
console.log(qt);
//don't mix named exports and defaults in same module
