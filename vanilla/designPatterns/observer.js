class Observer {
  constructor() {
    this.observers = [];
  }

  subscribe(callback) {
    this.observers.push(callback)
  }

  unsubscribe(callback) {
    this.observers = this.observers.filter(observer => observer !== callback);
  }

  notify(data) {
    this.observers.forEach(observer => observer(data));
  }
}

const observer = new Observer();
const fn = (data) => console.log(`Received data:'${data}'`);

observer.subscribe(fn);
observer.notify("Hello, world!"); // Received data:'Hello, world!'
observer.unsubscribe(fn);
