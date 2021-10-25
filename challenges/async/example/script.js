"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////

// //xml requests old scool of doing ajax calls
// const getCountryData = function (country) {
//   //silo code in function
//   const request = new XMLHttpRequest(); //create new hhtp request object put it into variable
//   request.open("GET", `https://restcountries.com/v2/name/${country}`); //open request
//   request.send(); //send request ajax call in background async can't set result into some variable because result not there yet
//   //FETCHED IN BACKGROUND
//   //the rest of the code keeps runniung while the api is contacted need callback function
//   //callback on request object for load event once data arrives callback will be called
//   request.addEventListener("load", function () {
//     //console.log(this.responseText); //this is request response is in response text
//     const [data] = JSON.parse(this.responseText); //convert it back to javascript object, as it's json (big string of text) destructure the big array
//     console.log(data); //array containing one object

//     const html = `<article class="country">
//     <img class="country__img" src="${data.flag}"/>
//     <div class="country__data">
//       <h3 class="country__name">${data.name}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${(
//         +data.population / 1000000
//       ).toFixed(1)} million</p>
//       <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//       <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//     </div>
//   </article>
//   `;
//     countriesContainer.insertAdjacentHTML("beforeend", html);
//     countriesContainer.style.opacity = 1;
//   });
// };
// //can also do
// // console.log(request.responseText);

// getCountryData("GB");
// getCountryData("usa");
// getCountryData("Germany");
// getCountryData("Turkey");
// getCountryData("Brazil");
// getCountryData("France");
// getCountryData("Canada");
// getCountryData("Japan");
// getCountryData("Germany");
// getCountryData("Russia");

//CALLBACK HELL

const renderCountry = function (data) {
  const html = `<article class="country">
  <img class="country__img" src="${data.flag}"/>
  <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)} million</p>
    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
  </div>
</article>
`;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

//xml requests old scool of doing ajax calls
const getCountryAndNeighbour = function (country) {
  //silo code in function
  const request = new XMLHttpRequest(); //create new hhtp request object put it into variable
  request.open("GET", `https://restcountries.com/v2/name/${country}`); //open request
  request.send(); //send request ajax call in background async can't set result into some variable because result not there yet
  //FETCHED IN BACKGROUND
  //the rest of the code keeps runniung while the api is contacted need callback function
  //callback on request object for load event once data arrives callback will be called
  request.addEventListener("load", function () {
    //console.log(this.responseText); //this is request response is in response text
    const [data] = JSON.parse(this.responseText); //convert it back to javascript object, as it's json (big string of text) destructure the big array
    console.log(data); //array containing one object
    renderCountry(data);
  });
};
//can also do
// console.log(request.responseText);

getCountryAndNeighbour("GB");
// getCountryData("usa");
// getCountryData("Germany");
// getCountryData("Turkey");
// getCountryData("Brazil");
// getCountryData("France");
// getCountryData("Canada");
// getCountryData("Japan");
// getCountryData("Germany");
// getCountryData("Russia");

//CALLBACK HELL
