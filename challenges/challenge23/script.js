"use strict";

const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then((res) => res.json())
    .then((data) => {
      //gets data which is resolved value
      console.log(data);
    });
};
whereAmI(52.508, 13, 381);
