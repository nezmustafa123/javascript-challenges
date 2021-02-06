function myReplace(str, before, after) {
   if(before[0].toLowerCase() !== before[0]) {
     //if case is different then uppercase the other one
   after = after[0].toUpperCase() + after.slice(1);
   console.log(after);
 }  else if (before[0].toUpperCase !== before[0]) {
    after = after[0].toLowerCase() + after.slice(1);

 }
   return str.replace(before,after);
}

console.log(myReplace("I think we should look up there", "up", "Down"));