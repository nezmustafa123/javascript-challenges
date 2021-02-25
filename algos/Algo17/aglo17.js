//function truthCheck(collection, pre) {
//  collection.forEach(item => {
//      for(let key in item) {
//     if(key === pre && item[key]) {
//       return true;
//     } 
//   }
//  });
//
//}
//
//console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));


function truthCheck(collection, pre) {

  
 for(let i = 0; i< collection.length; i++) {
   const item = collection[i];

      console.log(item.hasOwnProperty(pre), item[pre]);

      if(!item.hasOwnProperty(pre) || !item[pre]) {
        console.log('test');
        return false;
      }
      console.log('test2')

 }

return true;
}

console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));
