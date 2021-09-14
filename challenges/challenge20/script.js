"use strict";
//convert constructor function to class
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed; //speed in kmph
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  get speedUS() {
    //return speed in mph
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
    //convert to kmph
  }
}

const ford = new CarCl("Ford", 120);
//create new car object name it ford
console.log(ford.SpeedUS); //returns value
//76

ford.accelerate();
ford.accelerate();
ford.brake();

ford.speedUS = 60;

console.log(ford);
