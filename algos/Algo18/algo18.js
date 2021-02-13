//function addTogether(a,b) {
//
//  
//if(!Number.isInteger(a) || !Number.isInteger(b)) {
//return undefined;
//}
//
//  if(!b){
//    let sumTwoAnd;
//    sumTwoAnd =  function (a){
//      return a + b;
//  }
//   return sumTwoAnd;
//   
//  } else {
//     return a + b;
//  }
//};
//
//console.log(addTogether(2)(3));




function addTogether(a,b) {
  
  if(b === undefined){
   if(!Number.isInteger(a)) {
        return undefined;
     }
   return function(x){
     if(!Number.isInteger(x)) {
        return undefined;
     }
      return a + x;
  }

  } else {

if(!Number.isInteger(a) || !Number.isInteger(b)) {
return undefined;
}

    return a + b;
  }
};

console.log(addTogether(2)(3));