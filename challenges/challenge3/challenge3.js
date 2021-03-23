//const scoreDol = (96 + 108 + 89) / 3;
//const scoreKoa = (88 + 91 + 110) / 3;
//
//if (scoreDol > scoreKoa ) {
//    console.log(`Dolphins win`);
//} else if (scoreKoa > scoreDol) {
//    console.log(`Koalas win`)
//} else if (scoreKoa === scoreDol) {
//    console.log(`It's a draw`);
//}
//

//BONUS 1
//average score dolphin
const scoreDol = (97 + 112 + 101) / 3;
//average score koala
const scoreKoa = (109 + 95 + 106) / 3;
//both cases have to be true
if(scoreDol > scoreKoa && scoreDol >= 100) {
    console.log(`Dolphins win`);
} else if (scoreKoa > scoreDol && scoreKoa >= 100) {
    console.log(`Koalas win`);
    //all cases have to be true for case to be true
} else if (scoreKoa === scoreDol && scoreDol >= 100 && scoreKoa >= 100) {
    console.log(`Draw`);
} else {
    console.log(`no-one wins`);
}