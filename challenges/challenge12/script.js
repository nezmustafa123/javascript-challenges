document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));



const camelCase = function(underscore) {
    const underscoreArr = underscore.split('_');
    console.log(underscoreArr);
};


camelCase('underscore_case');

//const capitalizeName = function(name) {
//    //create an array from string then loop over
//    const nameArray = name.split(' ');
//    //split by space turn into array
//    const namesUpper = [];
//    for(const thename of names) {
//        namesUpper.push(thename[0].toUpperCase() + thename.slice(1));
//        //capitalise the individual name first letter
//        // then join it with the rest slice from position number one so everythign except first letter
//        //push into namesUpper
//    }
//    console.log(namesUpper.join(' '));
//    //join the array back together to make it a string
//};