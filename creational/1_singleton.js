class Counter {
  constructor () {
    if(typeof Counter.instance === 'object') {
      return Counter.instance;
    }
    this.count = 0;
    Counter.instance = this;
    return this;
  }

  getCounter() {
    return this.count;
  }
  increaseCounter() {
    return this.count ++;
  }
}

const myCount1 = new Counter();
const myCount2 = new Counter();

myCount1.increaseCounter();
myCount1.increaseCounter();
myCount2.increaseCounter();
myCount2.increaseCounter();

console.log(myCount1.getCounter()); //4
console.log(myCount2.getCounter()); //4