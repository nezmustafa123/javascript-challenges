function sumAll(arr) {
    let sum = 0;
    var max = Math.max(arr[0], arr[1]);
    var min = Math.min(arr[0], arr[1]);
   
    for(var i = min; i <= max; i++) {
      sum += i;
    }
    return sum;
   }
   
   sumAll([1, 4]);
   