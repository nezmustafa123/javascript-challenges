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
    //has to be string
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

// let currentImg;
// createImage("img/img-1.jpg")
//   .then((img) => {
//     currentImg = img; //hide in next step
//     console.log("Image loaded successfully");
//     return wait(2);
//   })
//   .then(() => {
//     //no resolved value from the wait function
//     currentImg.style.display = "none";
//     return createImage("img/img-2.jpg"); //
//   })
//   .then((img) => {
//     currentImg = img;
//     console.log("Image 2 loaded");
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = "none";
//     return createImage("img/img-3.jpg"); //create image returns image or error
//   })
//   .then((img) => {
//     currentImg = img;
//     console.log("image 3 loaded");
//     return wait(2);
//   })
//   .catch((err) => console.error(err));
// //catch any errors right at the end

const loadNPause = async function () {
  try {
    //load image 1
    let img = await createImage("img/img-1.jpg"); //img result of successful promise
    console.log("Image 1 loaded");
    await wait(2);
    img.style.display = "none"; //don't need current image because in the same  block/scope

    //load image 2
    img = await createImage("img/img-2.jpg");
    console.log("Image 2 loaded");
    await wait(2);
    img.style.display = "none";
  } catch (err) {
    console.error(err);
  }
};

// loadNPause();

//load all

const loadAll = async function (imgArr) {
  try {
    //on each iteration use the createimage function which returns promise use async await otherwise nothing will happen
    const imgs = imgArr.map(async (img) => await createImage(img));
    console.log(imgs);

    const imgElements = await Promise.all(imgs); //imgs array contains three promises
    console.log(imgElements); //images are in imgElements array
    imgElements.forEach((img) => img.classList.add("parallel")); //dodnt' create new array just manipulate the elements inside the array
  } catch (err) {
    console.error(err);
  }
};

loadAll(["img/img-1.jpg", "img/img-2.jpg", "img/img-3.jpg"]);
//image paths are strings
//returns three promises
//async function returns fullfilled value of promise
