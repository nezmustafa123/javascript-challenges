function diffArray(arr1, arr2) {
    var newArr = [];
//    let arrOneLength = arr1.length;
//    let arrTwoLength = arr2.length;
//    let biggerArrayLength = arrOneLength > arrTwoLength ? arrOneLength :    arrTwoLength;
//  
//    let smallerArrayLength = arrOneLength < arrTwoLength? arrOneLength : arrTwoLength;
//  
//    let biggerArray = arrOneLength > arrTwoLength ? arr1 : arr2;
//  
//    let smallerArray = arrOneLength < arrTwoLength ? arr1 : arr2;
//   
//  
//  //loop through bigger array first 
//  //to loop through all elements and not miss any
//  
//    for(let i = 0; i < biggerArrayLength; i ++) {
//      if(!smallerArray.includes(biggerArray[i])){
//          newArr.push(smallerArray[i]);
//        }
//      }
    
    arr1.forEach(item => {
   if(arr2.indexOf(item) === -1) {
    newArr.push(item);
   }
 });

 //one array is bigger so loop through secod one

 arr2.forEach(item => {
   if(arr1.indexOf(item) === -1){
     newArr.push(item)
   }
 });
    
    console.log(newArr);
    return newArr;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);






//
//function diffArray(arr1, arr2) {
//  var newArr = [];
//  let arr1Length = arr1.length;
//  let arr2Length = arr2.length;
//
//  let smallerArray = arr1Length < arr2Length ? arr1 : arr2;
//  let biggerArray = arr1Length > arr2Length ? arr1 : arr2;
//
//  for (const index in biggerArray) {
//    if (!smallerArray.includes(biggerArray[index])) {
//      newArr.push(biggerArray[index]);
//    }
//  }
//  console.log(newArr);
//}
//
//diffArray([1, 2, 3, 5], [1, 2, 3, 4, 7, 9, 5]);



