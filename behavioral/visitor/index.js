class Visitor {
  visitConcreteComponentA(element) {
    console.log(
      `${element.exclusiveMethodOfConcreteComponentA()} + ConcreteVisitor: Going through element A`
    );
  }

  visitConcreteComponentB(element) {
    console.log(
      `${element.specialMethodOfConcreteComponentB()} + ConcreteVisitor: Going through element B`
    );
  }
}

class ConcreteComponentA {
  accept(visitor) {
    visitor.visitConcreteComponentA(this);
  }

  exclusiveMethodOfConcreteComponentA() {
    return "A";
  }
}

class ConcreteComponentB {
  accept(visitor) {
    visitor.visitConcreteComponentB(this);
  }

  specialMethodOfConcreteComponentB() {
    return "B";
  }
}

// Usage
const components = [new ConcreteComponentA(), new ConcreteComponentB()];

const visitor = new Visitor();

for (let comp of components) {
  comp.accept(visitor);
}
