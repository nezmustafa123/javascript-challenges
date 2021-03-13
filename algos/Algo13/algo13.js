// function smallestCommons(arr) {
//   if(arr[0] > arr[1]) {
//     const temp = arr[1];
//     arr[1] = arr[0];
//     arr[0] = temp;
//   }
//   const newArr = [];

//   for(let i = arr[0]; i<=arr[i]; i++) {
//     newArr.push(i);
//   }

// const prod = newArr.reduce((acc, num) => acc *= num, 1);

// for(let i=1; i<=prod; i++) {
//   const len = newArr.filter(num => i % num === 0).length;
//   if(len === newArr.length) {
//     return i;
//   }
// }
//   return prod;
// }


// console.log(smallestCommons([10,50]));

const smallestCommons = arr => {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  // Initially the solution is assigned to the highest value of the array
  let sol = max;

  for (let i = max - 1; i >= min; i--) {
    // Each time the solution checks (i.e. sol%i===0) it won't be necessary
    // to increment 'max' to our solution and restart the loop
    if (sol % i) {
      sol += max;
      i = max;
  
    }
  }
  return sol;
};

smallestCommons([1, 5]);