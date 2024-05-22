class AbstractHandler {
  constructor() {
    this.next = null;
  }

  setNext(handler) {
    this.next = handler;
    return handler;
  }

  handle(request) {
    if (this.next) {
      return this.next.handle(request);
    }

    console.log("End of chain");
    return null;
  }
}

class DogHandler extends AbstractHandler {
  handle(request) {
    if (request === "Dog") {
      console.log("Dog: Bark");
      return "Dog: Bark";
    }
    return super.handle(request);
  }
}

class CatHandler extends AbstractHandler {
  handle(request) {
    if (request === "Cat") {
      console.log("Cat: Meow");
      return "Cat: Meow";
    }
    return super.handle(request);
  }
}

class MouseHandler extends AbstractHandler {
  handle(request) {
    if (request === "Mouse") {
      console.log("Mouse: Squeak");
      return "Mouse: Squeak";
    }
    return super.handle(request);
  }
}

const dogHandler = new DogHandler();
const catHandler = new CatHandler();
const mouseHandler = new MouseHandler();

dogHandler.setNext(catHandler).setNext(mouseHandler);

// Output: Cat: Meow
dogHandler.handle("Cat");

// Output: End of chain (without any result )
dogHandler.handle("Ankap text"); // Output: Cat: Meow
