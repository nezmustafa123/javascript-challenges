"use strict";

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

//pack data and functiionality
//create child 'class' of car
//same parameters as car constructor
const EV = function (make, speed, charge) {
  //same parameters get passed in with extra
  Car.call(this, make, speed); //call parent class instead of manually creating speed and make
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);
//link prototype prototype ev inherit from prototype of car
//add method to prototype of EV
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
  //set charge to charge received
};

EV.prototype.accelerate = function () {
  //the car constructor ALSO has accelerate javascript used the first one in prototype chain
  this.speed += 20;
  this.charge--;

  console.log(
    `${this.make} is going at ${this.speed} km/h with a charge of ${this.charge}`
  );
};
const tesla = new EV("Tesla", 120, 33); //pass in make speed and charge
//prototype chain protoype has chargeBattery its prototype which is equal to car.protoype has accelerate and break because linked prortpes
tesla.chargeBattery(100);
console.log(tesla);
tesla.brake();
tesla.accelerate();
