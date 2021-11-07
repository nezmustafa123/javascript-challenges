"use strict";

const imgContainer = document.querySelector(".images");
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement("img");
    img.src = imgPath; //set cource property to image path recieved will load asynchronously in the background

    img.addEventListener("load", function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener("error", function (event) {
      //error handler
      console.log(event);
      reject("Image not found");
    });
  });
};

let currentImg;
createImage("img/img-1.jpg")
  .then((img) => {
    currentImg = img; //hide in next step
    console.log("Image loaded successfully");
    return wait(2);
  })
  .then(() => {
    //no resolved value from the wait function
    currentImg.style.display = "none";
    return createImage("img/img-2.jpg"); //
  })
  .then((img) => {
    currentImg = img;
    console.log("Image 2 loaded");
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = "none";
    return createImage("img/img-3.jpg7"); //create image returns image or error
  })
  .then((img) => {
    currentImg = img;
    console.log("image 3 loaded");
    return wait(2);
  })
  .catch((err) => console.error(err));
//catch any errors right at the end
