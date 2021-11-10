//better way to consume promises async await syntactic sugar
//create async function (non-blocking)
//add async in front of function will keep running in background while performing code inside of it
//then returns a promise

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const renderError = function (msg) {
  //export rendering error
  //insert adjacent text
  countriesContainer.insertAdjacentText("beforeend", msg);
  countriesContainer.style.opacity = 1;
};

const renderCountry = function (data, className = "") {
  //dedault class name
  //once neighbouring country arrives will use this
  const html = `<article class="country ${className}">
    <img class="country__img" src="${data.flag}"/>
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} million people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1; //turn container opacity to one
};

//async function runs ASYNC in the background

// const whereAmI = async function () {
//   try {
//     //use geolocation api promise  getposition to get coords
//     const pos = await getPosition(); //await promise returned from get position
//     // console.log(pos); //automatically gets rejected
//     const { latitude: lat, longitude: lng } = pos.coords;
//     //plug lat and lng into geocode api

//     //reverse geocoding
//     const resGeoCode = await fetch(
//       //response will have ok property
//       //returned promise stored in resGeoCode
//       `https://geocode.xyz/${lat},${lng}?geoit=json` //promise gets rejected only if no internet connection
//     );
//     if (!resGeoCode.ok) throw new Error(`problem getting location data`);
//     console.log(resGeoCode);

//     const dataGeo = await resGeoCode.json(); //also a promise
//     console.log(dataGeo);
//     //returns object with properties
//     //one or more await statements inside the function
//     //await the result of the fetch api promise will stop the execution of the code until the fetch promise is fulfilled
//     //same as
//     //fetch(`https://restcountries.eu/v2/name/${country}`).then((res) =>
//     //   console.log(res)
//     // );

//     const countryRes = await fetch(
//       `https://restcountries.com/v2/name/${dataGeo.country}`
//     ); //will be resolved value of promise
//     if (!countryRes.ok) throw new Error(`Problem getting country data`);
//     //   console.log(res);
//     const countryData = await countryRes.json();
//     //store fullfilled promise data into data variable
//     renderCountry(countryData[0]);
//     return `You are in ${dataGeo.city}, ${dataGeo.country}`; //when console logging will return promise
//   } catch (err) {
//     //returning values from async await

//     console.error(`${err} ***`);
//     renderError(`something went wrong X_X ${err.message}`);

//     //reject promise returned from asynch function inside catch block
//     throw err; //manually throw in catch block
//   }
// };
// //try catch to catch errors using async functions
// console.log("1: I will get the location ");
// const city = whereAmI();
// console.log(city);
//returns promise javascript doesn't know what will be returned
//handle promise returned using async await

// (async function () {
//   try {
//     const city = await whereAmI();
//     console.log(`2: ${city}`);
//   } catch (err) {
//     console.error(`2: ${err.message} xxx`);
//   }
//   console.log("3: finished getting location");
// })();
//return data from an async funcition and recieve and handle returned data
//async function returning other async function

// whereAmI()
//   .then((city) => console.log(`2: ${city}`))
//   .catch((err) => console.error(`2: ${err.message} xxx`))
//   .finally(() => console.log("3: finished getting location")); //3 will come at the end
//promise is still fullfilled even through there is an error in the async function have to 'rethrow' eerror
//city is the resolved vale of the promise. the string returned
// console.log("3: FINISHED GETTING LOCATION");
//value returned from  async function is the fulfilled value of the promise

// try {
//   let y = 1;
//   const x = 2;
//   y = 3; //assignment to constant variable
// } catch (err) {
//   //no dot before the catch
//   //has access to whatever error happened in the try block
//   alert(err.message); //error  object has message property allert appears as a popup rather than in the console alert message
// }

//3 countries at the same time without order data arrives in mattering

const getJSON = function (url, errorMsg = "Something went wrong") {
  //generic json function
  return fetch(url).then((response) => {
    //if response ok is false throw new error then define new message
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`); // will propagate down to catch method create new error pass in error message use throw keyword
    return response.json(); //returns promise
  });
};

const get3Countries = async function (c1, c2, c3) {
  //wrap code in try and catch block
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);

    //all combinator satic method takes asrray of promises and runs all promises at the same time
    const data = await Promise.all([
      //returned value of promise becomes array containing three arrays that each contain an object
      getJSON(`https://restcountries.com/v2/name/${c1}`),
      getJSON(`https://restcountries.com/v2/name/${c2}`),
      getJSON(`https://restcountries.com/v2/name/${c3}`),
    ]); //if one promise rejects the whole thing rejects and short circuits
    //loop through array of data get first element of each array and capital property
    console.log(data.map((country) => country[0].capital));
    // console.log(data1.capital, data2.capital, data3.capital);
  } catch (err) {
    console.error(err);
  }
};

get3Countries("Madagascar", "Brazil", "GB");
