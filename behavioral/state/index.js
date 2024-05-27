class State {
  constructor(count) {
    this.count = count;
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  handleContext(context) {
    context.setState(this);
  }
}

class Component {
  constructor() {
    this.state = null;
  }

  getState() {
    return this.state;
  }

  setState(state) {
    this.state = state;
  }
}

const component = new Component();

const state = new State(1);
state.increment();
state.handleContext(component);

console.log(component.getState().count); // 2

state.increment();
state.handleContext(component);

console.log(component.getState().count); // 3
