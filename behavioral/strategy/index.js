class NaviagtionApp {
  constructor(strategy) {
    this.strategy = strategy;
  }

  findBestRoute(A, B) {
    this.strategy.findBestRoute(A, B);
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }
}

class Strategy {
  findBestRoute(A, B) {
    throw new Error("This method must be overwritten!");
  }
}

class WalkingStrategy extends Strategy {
  findBestRoute(A, B) {
    console.log("Walking from A to B");
  }
}

class DrivingStrategy extends Strategy {
  findBestRoute(A, B) {
    console.log("Driving from A to B");
  }
}

class PublicTransportStrategy extends Strategy {
  findBestRoute(A, B) {
    console.log("Using public transport from A to B");
  }
}

const walkingStrategy = new WalkingStrategy();
const drivingStrategy = new DrivingStrategy();
const publicTransportStrategy = new PublicTransportStrategy();

const navigationApp = new NaviagtionApp(walkingStrategy);
// navigationApp.findBestRoute("A", "B");

navigationApp.setStrategy(drivingStrategy);
// navigationApp.findBestRoute("A", "B");

navigationApp.setStrategy(publicTransportStrategy);
// navigationApp.findBestRoute("A", "B");

// Output:
