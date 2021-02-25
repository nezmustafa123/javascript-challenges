function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line

   collection.forEach(item => {
     //loop over first argument
     let countKey = 0;
     let countKeyEqual = 0;
     for(let key in source) {
       //loop over key in second argument
     countKey++;
        console.log(source[key]);
          if(item[key] && item[key] === source[key]) {
        countKeyEqual++;
      }
     }

     if(countKeyEqual === countKey){
       arr.push(item);
     }
   });
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });