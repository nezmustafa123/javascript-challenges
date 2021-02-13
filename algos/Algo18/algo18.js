function addTogether(a,b) {

  
if(!Number.isInteger(a) || !Number.isInteger(b)) {
return undefined;
}

  if(!b){
    let sumTwoAnd;
    sumTwoAnd =  function (a){
      return a + b;
  }
   return sumTwoAnd;
   
  } else {
     return a + b;
  }
};

console.log(addTogether(2)(3));