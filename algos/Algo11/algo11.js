function sumFibs(num) {

  //set a to 1
  //set b to 1
  //set sum to 0
  let a = 1;
  let b = 1;
  let sum = a + b;

  while(sum < num) {
    const temp = a;
    a = b;
    b = temp + b;



    if(b <= num){
    sum += (b % 2 == 0) ? 0 : b;

    }
    
  }
  return sum;
}

console.log(sumFibs(1000));