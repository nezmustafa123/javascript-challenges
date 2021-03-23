'use strict';
//functin like a fruit machine
//function cutFruitPieces(fruit){
//    return fruit * 4;
//}
//
//function fruitProcessor(apples, oranges) {
//    const applePieces = cutFruitPieces(apples);
//    const orangePieces = cutFruitPieces(oranges);
//    
//    const juice = `Juice with ${applePieces} piece of appple and ${orangePieces} pieces of orange.`;
//    return juice;
//}
//
//console.log(fruitProcessor(2,3));


const calcAvg = (a, b, c) => {
    return (a + b + c) /3;
};

const avgDolphins = calcAvg(44, 23, 71);
const avgKoalas = calcAvg(65, 54, 49);

console.log(avgDolphins);
console.log(avgKoalas);


function checkWinner(avgDolphins, avgKoalas) {
    //if average do;hins twice that of average koalas
    if (avgDolphins >=2 * avgKoalas) {
        console.log(`Dolphins win ${avgDolphins} to ${avgKoalas}`);
        //if average koalas twice that of average dolphins
    } else if (avgKoalas >=2 * avgDolphins) {
        console.log(`Koalas win ${avgKoalas} to ${avgDolphins}`);
    } else {
        console.log('Draw');
    }
};

checkWinner(avgDolphins, avgKoalas);