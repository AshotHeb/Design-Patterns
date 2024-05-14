class Audi {
  constructor(year) {
    this.name = "Audi";
    this.year = year;
  }
}

class BMW {
  constructor(year) {
    this.name = "BMW";
    this.year = year;
  }
}

class CarFactory {
  constructor(type, year) {
    switch (type) {
      case "Audi":
        return new Audi(year);
      case "BMW":
        return new BMW(year);
      default:
        return null;
    }
  }
}

//Usage

// const audi = new CarFactory("Audi", 2020);
// console.log(audi);
// const bmw = new CarFactory("BMW", 2020);
// console.log(bmw);
