class Dog {
  constructor(name) {
    this.name = name;
  }
}

const dogFunctionality = {
  bark() {
    console.log(`Woof!`);
  },
  wagTail() {
    console.log('Wagging my tail')
  },
  play() {
    console.log('Playing!')
  }
}

const animalFunctionality = {
  walk() {
    console.log('Walking!')
  },
  sleep() {
    console.log('Sleeping!')
  }
}

Object.assign(dogFunctionality, animalFunctionality)
Object.assign(Dog.prototype, dogFunctionality);


const pet1 = new Dog('Buddy');

pet1.name
pet1.bark()
pet1.wagTail()
pet1.play()
pet1.walk()
pet1.sleep()