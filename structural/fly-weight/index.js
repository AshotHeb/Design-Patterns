class CarItem {
  constructor(model, color) {
    this.model = model;
    this.color = color;
  }
}

//Fly weight factory
class CarFactoryFlyWeight {
  constructor() {
    this.cars = {};
  }

  create(car) {
    const key = car.join("_");
    if (!this.cars[key]) {
      this.cars[key] = new CarItem(...car);
    }
    return this.cars[key];
  }
}

const factory = new CarFactoryFlyWeight();

factory.create(["Audi", "white"]);
factory.create(["Audi", "white"]);
factory.create(["BMW", "black"]);
factory.create(["BMW", "black"]);

// console.log(factory.cars);
