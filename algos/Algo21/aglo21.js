//function orbitalPeriod(arr) {
//  var GM = 398600.4418;
//  var earthRadius = 6367.4447;
//  return arr.map(item => ({
//    name: item.name,
//    orbitalPeriod:(2 * Math.PI) * Math.sqrt(((Math.pow(earthRadius + item.avgAlt), 3) / GM))
//  }));
//}
//
//console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));





function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  return arr.map(item => ({
    name: item.name,
    orbitalPeriod:(2 * Math.PI) * Math.sqrt(((Math.pow(earthRadius + item.avgAlt), 3) / GM))
  }));
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
