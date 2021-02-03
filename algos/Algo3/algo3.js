function destroyer(arr, ...rest) {
  console.log(rest);
  return arr.filter(item => rest.indexOf(item) === -1);
}
//filter through array if elements in first array not in arguments then keep them

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));