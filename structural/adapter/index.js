class OldConsole {
  log(message) {
    console.log(message);
  }
}

class NewConsole {
  print(message) {
    console.log(message);
  }
}

class ConsoleAdapter {
  constructor(message) {
    const newConsole = new NewConsole();
    this.log = newConsole.print;
  }
}

const oldConsole = new OldConsole();
oldConsole.log("Adapter Old");

const newConsole = new ConsoleAdapter();
newConsole.log("Adapter New");

const consoleAdapter = new ConsoleAdapter();
consoleAdapter.log("Adapter");
