function steamrollArray(arr) {

let newArr = [];

arr.forEach(item => {
  console.log(flatten(item));
})

  newArr = (flatten(arr[3]));

}



function flatten(item) {
  if(!Array.isArray(item)) {
    return item;
  }

  return flatten(item[0]);
}



console.log(steamrollArray([1, [2], [3, [[4]]]]));