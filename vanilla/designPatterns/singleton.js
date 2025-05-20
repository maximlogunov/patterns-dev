// Share a single global instance throughout our application
class Counter {
  static #instance;
  #count = 0;

  constructor() {
    if (Counter.#instance) {
      throw new Error('Counter is a singleton class');
    }
  }

  static getInstance() {
    if (!Counter.#instance) {
      Counter.#instance = new Counter();
    }

    return Counter.#instance;
  }

  increment() {
    return ++this.#count;
  }

  decrement() {
    return --this.#count;
  }

  get() {
    return this.#count;
  }
}

// Usage
const counter1 = Counter.getInstance();
console.log(counter1.increment()); // Output: 1
console.log(counter1.get());   // Output: 1

const counter2 = Counter.getInstance();
console.log(counter2.decrement()); // Output: 0
console.log(counter2.get());   // Output: 0
