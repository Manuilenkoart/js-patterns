class Car {
  constructor() {
    this.autopilot = false;
    this.parktronic = false;
    this.signaling = false;
  }
}

class CarBuilder {
  constructor() {
    this.car = new Car();
  }

  addAutopilot(autopilot) {
    this.car.autopilot = autopilot
    return this;
  }

  addParktronic(parktronic) {
    this.car.parktronic = parktronic
    return this;
  }

  addSignaling(signaling) {
    this.car.signaling = signaling
    return this;
  }

  updateEngine(engine) {
    this.car.engine = engine;
    return this;
  }

  build() {
    return this.car;
  }
 }

 const myCar = new CarBuilder().addAutopilot(true).addParktronic(true).updateEngine('v8').build();

 console.log(myCar);
//  Car {
//   autopilot: true,
//   parktronic: true,
//   signaling: false,
//   engine: 'v8'
// }