function diffArray(arr1, arr2) {
    var newArr = [];
    let arrOneLength = arr1.length;
    let arrTwoLength = arr2.length;
    let biggerArrayLength = arrOneLength > arrTwoLength ? arrOneLength :    arrTwoLength;
  
    let smallerArrayLength = arrOneLength < arrTwoLength? arrOneLength : arrTwoLength;
  
    let biggerArray = arrOneLength > arrTwoLength ? arr1 : arr2;
  
    let smallerArray = arrOneLength < arrTwoLength ? arr1 : arr2;
   
  
  //loop through bigger array first 
  //to loop through all elements and not miss any
  
    for(let i = 0; i < biggerArrayLength; i ++) {
      if(!smallerArray.includes(biggerArray[i])){
          newArr.push(smallerArray[i]);
        }
      }
    console.log(newArr);
    return newArr;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);