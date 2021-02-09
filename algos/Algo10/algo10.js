const ents = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&apos;",
}

//creat 

function convertHTML(str) {
//replace key with key property
    for(let key in ents) {
      const re = new RegExp(key, "g");
      str = str.replace(re, ents[key]);
    }
  return str;
}

console.log(convertHTML("Dolce & Gabbana"));

//*amp; 
//<alt;
//>*gt;
//&quot;
//&apos;