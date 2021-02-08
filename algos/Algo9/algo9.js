function uniteUnique(...arr) {
  const finalArr = [];

  //loop through outer array

  arr.forEach(innerArr => {
    innerArr.forEach(item => {
      //if item not included final array then push it
      if(!finalArr.includes(item)) {
        finalArr.push(item);
      }
    })
  }); 
  return finalArr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));


//can also do it with reduce

function uniteUnique(...arr) {
//  const finalArr = [];
//
//  //loop through outer array
//
//  arr.forEach(innerArr => {
//    innerArr.forEach(item => {
//      //if item not included final array then push it
//      if(!finalArr.includes(item)) {
//        finalArr.push(item);
//      }
//    })
//  });
  return arr.reduce((acc, innerArr) => {
      innerArr.forEach(item => {
          if(!acc.indluces(item)){
             acc.push(item);
             }
      });
      return acc;
  }, []);
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
