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

const renderCountry = function (data, className = "") {
  //once neighbouring country arrives will use this
  const html = `<article class="country ${className}">
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
  //data of neighbouring country result of first call
  //silo code in function

  //AJAX call country (1)
  const request = new XMLHttpRequest(); //create new hhtp request object put it into variable
  request.open("GET", `https://restcountries.com/v2/name/${country}`); //open request
  request.send(); //send request ajax call in background async can't set result into some variable because result not there yet
  //FETCHED IN BACKGROUND
  //the rest of the code keeps runniung while the api is contacted need callback function
  //callback on request object for load event once data arrives callback will be called
  request.addEventListener("load", function () {
    //callback
    //console.log(this.responseText); //this is request response is in response text
    const [data] = JSON.parse(this.responseText); //convert it back to javascript object, as it's json (big string of text) destructure the big array
    console.log(data); //array containing one object
    //destructure the array recieved remove the brackets
    //render country 1
    renderCountry(data);

    //get neighbour country (2)
    const [neighbour] = data.borders;
    console.log(neighbour);
    //if neighbour doesn't exist return immedietely
    if (!neighbour) return;

    //if it does exist
    //AJAX call country (2)
    const request2 = new XMLHttpRequest(); //second ajax call in first one dependant on first one
    request2.open("GET", `https://restcountries.com/v2/alpha/${neighbour}`);
    request2.send();
    //second ajax call then load listener on the request
    request2.addEventListener("load", function () {
      //appears after the UK
      // console.log(request2.responseText);
      const data2 = JSON.parse(this.responseText);
      console.log(data2); //not an array anymore just one unique result country codes unique just one result
      //call the rendercountry method at the end of the inner callback function
      renderCountry(data2, "neighbour"); //when it is a neighbour pass in neighbouring country
    });
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
