"use strict";
//convert constructor function to class
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed; //speed in kmph

    console.log(this);
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    //return speed in mph
    return this.speed / 1.6;
    //get the speed property to mph by diving 1.6
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
    //convert to kmph
    //set speed property to kmph again like the original
  }
}

class EVCl extends CarCl {
  //new object will use this class which extends other class
  #charge;

  constructor(make, speed, charge) {
    //add extra parameter
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = this.#charge += chargeTo;
    console.log(`charge is now ${this.#charge}`);
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;

    console.log(
      `${this.make} is going at ${this.speed} km/h with a charge of ${
        this.#charge
      }`
    );
    return this; //return this to chain, return this on all methods that set property
  }
}

const rivian = new EVCl("Rivian", 120, 23);
console.log(rivian);

rivian.accelerate().accelerate().accelerate().chargeBattery(10);

console.log(rivian.speedUS);
