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
import add, { cart } from "./shoppingCart.js";

//console.log(shippingCost); //can't access variable
//can't use it in this file need named exports

//use object
// console.log(ShoppingCart.totalPrice);
// console.log(ShoppingCart.shippingCost);

// ShoppingCart.addToCart("bread", 6);
// console.log(ShoppingCart.totalPrice);
//also access properties as if it's a class
// import * as ShoppingCart from "./shoppingCart"; //creates object containing everthing
// import * as ShoppingCart from "./shoppingCart.js";
//creates object containing everthing

//can give any name you want because default export
add("pizza", 2);
add("bread", 5);
add("apples", 4); //live conntection keep pushing values to array
console.log(cart);
// console.log(price);
// console.log(qt);
// //don't mix named exports and defaults in same module

// //TOP level await only works inside modules
// // console.log("Start fetching");
// // const res = await fetch("https://jsonplaceholder.typicode.com/posts"); //blocking entire execution of this module
// // console.log(res);
// // const data = await res.json(); //returns another promise parse data as json
// // //store the json in a variable
// // console.log(data);

// // //blocks execution of entire module now use with caution
// // console.log("something");

// //async funciton want to return some data from

// const getLastPost = async function () {
//   //do the fetch request but only return the very last post
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");

//   //blocking entire execution of this module
//   // console.log(res);
//   const data = await res.json(); //returns another promise parse data as json
//   //store the json in a variable
//   //console.log(data); //return last post
//   return { title: data.at(-1).title, text: data.at(-1).body };
//   //returns new promise and not expected object async always returns promise data not yet arrived still have the pending promise
// };

// const lastPost = getLastPost();
// console.log(lastPost);
// //not very clean
// lastPost.then((last) => console.log(last));

// //use top level await instead

// const lastPost2 = await getLastPost();
// console.log(lastPost2);
// //returns the last post directly

// //if one module importa a module which has a top level modules importing module will wait for iomported module to finish blocking code

// //OLD MODULE PATTERN

// //main goal is to encapsulate functinoality to have private data and to expose a public api
// //functions return values and give private data by default
// //use iffe
// //only call it once don't call it seperately

// const ShoppingCart2 = (function () {
//   //assign result of iffe into a new variable
//   //creat a new scope and return data just once
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 273;
//   const totalQuantity = 23;

//   //named export has to happen in top level code
//   const addToCart = function (product, quantity) {
//     cart.push(product, quantity);
//     console.log(
//       `${quantity} ${product} added to car(shipping cost is ${shippingCost})`
//     );
//   };
//   const orderStock = function (product, quantity) {
//     console.log(`${quantity} ${product} ordered from supplier`);
//   };

//   return {
//     //return public api object that contains stuff you wish to mke public
//     //could have defined them as properties and methods too
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuantity,
//   }; //ever loses connection to birth place (closure) acces to all variables available in birthplace
//   //add to car never closes connection to its birth place, the whole scope
// })();

// ShoppingCart2.addToCart("apple", 4);
// ShoppingCart2.addToCart("pizza", 2);

// //private module everything is private to the module can't access it in the console

// console.log(ShoppingCart2);
// console.log(ShoppingCart2.shippingCost); //undefined private variable
// //implementation of the module pattern
// //method exposed as api but properties are not

// //COMMON JS MODULES other module systems from the past

// //relied on external implementations

// //one file is one module in common js
// //export and then the name of the export
// //export
// export.addTocart = function (product, quantity) {
//   cart.push(product, quantity);
//   console.log(
//     `${quantity} ${product} added to car(shipping cost is ${shippingCost})`
//   ); //export is an object in node js
// };
// won't work in browser put will work in NODE JS

//Import
// const {addToCart} = require('./shoppingCart.js');

// import cloneDeep from "/lodash-es";
import cloneDeep from "lodash";
//parcel finds module automatically without typing in the path
//copying nested objects
const state = {
  cart: [
    { product: "bread", quantity: 5 },
    { product: "pizza", quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
//lodash function
state.user.loggedIn = false;
console.log(stateClone);
//changes the property in both objects
//to create deep clone use the function that lodash gives us
console.log(stateDeepClone);

//use piece of open source software

//bundling with parcel and npm scripts
//hot module replacement

if (module.hot) {
  module.hot.accept();
}
//only parcel understands it
//will reload the page everytime new module is there
