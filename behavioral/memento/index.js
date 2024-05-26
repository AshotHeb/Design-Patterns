class Memento {
  constructor(value) {
    this.value = value;
  }
}

class Originator {
  constructor() {
    this.value = "";
  }

  setValue(value) {
    console.log(`Originator: Setting value to ${value}`);
    this.value = value;
  }

  saveToMemento() {
    console.log("Originator: Saving to Memento.");
    return new Memento(this.value);
  }

  restoreFromMemento(memento) {
    this.value = memento.value;
    console.log(
      `Originator: Value after restoring from Memento: ${this.value}`
    );
  }
}

class Caretaker {
  constructor() {
    this.mementos = [];
  }

  addMemento(memento) {
    this.mementos.push(memento);
  }

  getMemento(index) {
    return this.mementos[index];
  }
}
