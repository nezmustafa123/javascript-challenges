function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces;
    const orangePieces = cutFruitPieces;
    
    const juice = `Juice with ${applePieces} piece of appple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2,3));