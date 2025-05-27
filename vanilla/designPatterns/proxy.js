const person = {
  name: "Jane"
};

const personProxy = new Proxy(person, {
  get(target, prop) {
    console.log(`Accessing ${prop}`);
    return Reflect.get(target, prop);
  },
  set(target, prop, value) {
    console.log(`Setting ${prop} to ${value}`);
    return Reflect.set(target, prop, value);
  }
});

personProxy.name = "John";
console.log(personProxy.name); // Accessing name
// Setting name to John