// Abstract factory 
function bmwProducer(kind) {
  switch(kind) {
    case 'sport': 
    return sportCarFactory

    default:
      return familyCarFactory
  }
}

// factories
function sportCarFactory() {
  return new Z4()
}

function familyCarFactory() {
  return new I3()
}

class Z4 {
  info() {
    return "Z4 is a sport car"
  }
}

class I3 {
  info() {
    return "I3 is a family car"
  }
}

// Initializing Abstract factory  of sport cars
const produce = bmwProducer('sport');

// Car producing (Factory)
const myCar = new produce();

console.log(myCar.info()); // Z4 is a sport car