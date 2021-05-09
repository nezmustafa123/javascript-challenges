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


document.querySelector('button').addEventListener('click', function(){
   
    //add eventlistener to button
    
    //get textarea value
    const text = document.querySelector('textarea').value;
    //split text into rows using new line split it by new line array with 5 elements
    const rows = text.split('\n');
    console.log(rows);
    
    for (const row of rows) {
       //get array with two words two variables
        //get rid of spaces trim convert to lowercase use trim method
        const [first, second] = row.toLowerCase().trim().split('_');
        console.log(first, second);
        const output = `${first}${second[0].toUpperCase()}${second.slice(1)}`;
        console.log(output);
        //can also do 
//         const output = `${first}${second.replace(second[0], second[0].toUpperCase)}`;
//        console.log(output);
    }

});







