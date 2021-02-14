//function steamrollArray(arr) {
//
//let newArr = [];
//
//arr.forEach(item => {
//  console.log(flatten(item));
//})
//
//  newArr = (flatten(arr[3]));
//
//}
//
//
//
//function flatten(item) {
//  if(!Array.isArray(item)) {
//    return item;
//  }
//
//  return flatten(item[0]);
//}




function steamrollArray(arr) {

const finalArr = [];
//loop through 
arr.forEach(item => {
  if(Array.isArray(item)) {
//recursevley call the function

   finalArr.push(...steamrollArray(item))
   console.log(finalArr)
  } else {
    finalArr.push(item);
  }
})
  return finalArr;
}



console.log(steamrollArray([1, [2], [3, [[4]]]]));