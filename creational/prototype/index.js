class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }

  clone() {
    return new Animal(this.name);
  }
}

const rabbit = new Animal("rabbit");
const cloneRabbit = rabbit.clone();
