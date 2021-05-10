const flights ='_Delayed_Depature;fao93766109;txl2133758840;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Depature;fao93766109;list232639855;12:30';

//transform one string into readable format


//console.log(flights.split('+'));


//one line for each of the flights

//refactor

const getCode = str => str.slice(0,3).toUpperCase();
//define function outside loop otherwise it will be defined over and over again

for (const flight of flights.split('+')){
    //log each string to console
    
    const [type,from, to, time] = flight.split(';');
    //split by colon desstructure 4 elements of the new array
    //departure from airport to airport and time
    const output = `${type.startsWith('_Delayed')? '🔴' : ''} ${type.replaceAll('_',' ')} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
    //pad at the end of the string
  

//format each of the 4 strings
//replace colon in time with h using replace 
    
    console.log(output);
}