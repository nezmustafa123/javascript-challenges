function dropElements(arr, func) {
  const index = arr.findIndex(func);
  //drop the elements
  return (index === -1) ? [] : arr.slice(index);
}

console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));