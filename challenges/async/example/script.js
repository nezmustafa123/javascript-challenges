"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////

//xml requests old scool of doing ajax calls
const getCountryData = function (country) {
  //silo code in object
  const request = new XMLHttpRequest(); //create new hhtp request object put it into variable
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`); //open request
  request.send(); //send request ajax call in background async can't set result into some variable because result not there yet
  //FETCHED IN BACKGROUND
  //the rest of the code keeps runniung while the api is contacted need callback function
  //callback on request object for load event once data arrives callback will be called
  request.addEventListener("load", function () {
    //console.log(this.responseText); //this is request response is in response text
    const [data] = JSON.parse(this.responseText); //convert it back to javascript object, as it's json (big string of text) destructure the big array
    console.log(data); //array containing one object

    const html = `<article class="country">
    <img class="country__img" src="${data.flag}"/>
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 100000
      ).toFixed(1)}</p>
      <p class="country__row"><span>🗣️</span>${data.languages.eng}</p>
      <p class="country__row"><span>💰</span>${data.currencies.symbol}</p>
    </div>
  </article>
  `;
    countriesContainer.insertAdjacentHTML("beforeend", html);
    countriesContainer.lastElementChild.opacity = 1;
  });
};
//can also do
// console.log(request.responseText);

getCountryData("GB");
