//Importing module
// ..import with the path of the module in a string
import "./shoppingCart.js";
import {
  addToCart,
  totalPrice as price,
  totalQuantity,
} from "./shoppingCart.js"; //exact same variable name in curly braces
console.log("Importing module");
//exported code is parsed and executed BEFORE the script it's imported into
//statements are hoiseted to the top

//console.log(shippingCost); //can't access variable
//can't use it in this file need named exports

addToCart("bread", 6);

console.log(price, totalQuantity);
