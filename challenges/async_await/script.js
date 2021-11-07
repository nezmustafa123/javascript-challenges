//better way to consume promises async await syntactic sugar
//create async function (non-blocking)
//add async in front of function will keep running in background while performing code inside of it
//then returns a promise

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

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

const whereAmI = async function (country) {
  //one or more await statements inside the function
  //await the result of the fetch api promise will stop the execution of the code until the fetch promise is fulfilled
  //same as
  //fetch(`https://restcountries.eu/v2/name/${country}`).then((res) =>
  //   console.log(res)
  // );

  const res = await fetch(`https://restcountries.com/v2/name/${country}`); //will be resolved value of promise
  console.log(res);
  const data = await res.json();
  //store fullfilled promise data into data variable

  renderCountry(data[0]);
};
//async function runs ASYNC in the background

whereAmI("Russia");
console.log("first");
