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

const whereAmI = async function () {
  try {
    //use geolocation api promise  getposition to get coords
    const pos = await getPosition(); //await promise returned from get position
    // console.log(pos); //automatically gets rejected
    const { latitude: lat, longitude: lng } = pos.coords;
    //plug lat and lng into geocode api

    //reverse geocoding
    const resGeoCode = await fetch(
      //response will have ok property
      //returned promise stored in resGeoCode
      `https://geocode.xyz/${lat},${lng}?geoit=json` //promise gets rejected only if no internet connection
    );
    if (!resGeoCode.ok) throw new Error(`problem getting location data`);
    console.log(resGeoCode);

    const dataGeo = await resGeoCode.json(); //also a promise
    console.log(dataGeo);
    //returns object with properties
    //one or more await statements inside the function
    //await the result of the fetch api promise will stop the execution of the code until the fetch promise is fulfilled
    //same as
    //fetch(`https://restcountries.eu/v2/name/${country}`).then((res) =>
    //   console.log(res)
    // );

    const countryRes = await fetch(
      `https://restcountries.com/v2/name/${dataGeo.country}`
    ); //will be resolved value of promise
    if (!countryRes.ok) throw new Error(`Problem getting country data`);
    //   console.log(res);
    const countryData = await countryRes.json();
    //store fullfilled promise data into data variable
    //   console.log(data);
    renderCountry(countryData[0]);
  } catch (err) {
    console.error(`${err} ***`);
    renderError(`something went wrong X_X ${err.message}`);
  }
};
//async function runs ASYNC in the background

whereAmI();
whereAmI();
whereAmI();

console.log("first");

//try catch to catch errors using async functions

// try {
//   let y = 1;
//   const x = 2;
//   y = 3; //assignment to constant variable
// } catch (err) {
//   //no dot before the catch
//   //has access to whatever error happened in the try block
//   alert(err.message); //error  object has message property allert appears as a popup rather than in the console alert message
// }
