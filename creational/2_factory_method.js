class BMW {
  constructor(model, price, maxSpeed) {
    this.model = model;
    this.price = price;
    this.maxSpeed = maxSpeed;
  }
}

class BMWFactory {
  create(type) {
    switch(type) {
      case "X5":
        return new BMW(type, 10800, 300);
        case "X6":
          return new BMW(type, 11100, 320);
    }
  }
}

const factory = new BMWFactory();

const x5 = factory.create('X5');
const x6 = factory.create('X6');
console.log('x5', x5); // { model: 'X5', price: 10800, maxSpeed: 300 }
console.log('x6', x6); // { model: 'X6', price: 11100, maxSpeed: 320 }