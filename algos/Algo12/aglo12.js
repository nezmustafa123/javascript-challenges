function sumPrimes(num) {
  let sum = 0;
// console.log(isPrime())
  for(let i = 2; i <= num; i++) {
    if(isPrime(i)) {
      sum += i;
    }
  }
  return sum;
}

//new function checking if prime
function isPrime(num) {
  //if 5 will test wtih 
  for(let i = 2; i<= num/2; i++){
    if(num % i === 0) {
      return false;
    }
  } 

  return true;
}

console.log(sumPrimes(10));

