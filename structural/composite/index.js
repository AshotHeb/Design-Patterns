//Use the Composite pattern when you have to implement a tree-like object structure

class Item {
  parent = null;
  constructor(name) {
    this.name = name;
  }

  setParent(parent) {
    this.parent = parent;
  }

  getParent() {
    return this.parent;
  }

  print() {
    console.log(this.name);
  }

  //Abstruct methods

  add() {}
  remove() {}
  isComposite() {
    return false;
  }
}

class Child extends Item {
  constructor(name) {
    super(name);
  }

  operation() {
    return "Leaf";
  }

  print() {
    console.log(this.name);
  }
}

class Composite extends Item {
  children = [];

  constructor(name) {
    super(name);
  }

  add(child) {
    this.children.push(child);
    child.setParent(this);
  }

  remove(child) {
    const index = this.children.indexOf(child);
    this.children.splice(index, 1);
    child.setParent(null);
  }

  isComposite() {
    return true;
  }

  print() {
    console.log(this.name);
    this.children.forEach((child) => {
      child.print();
    });
  }
}

// Usage
// const tree = new Composite("root");
// tree.add(new Item("Leaf 1"));
// tree.add(new Item("Leaf 2"));

// const branch1 = new Composite("Branch 1");
// branch1.add(new Item("Leaf 3.1"));
// branch1.add(new Item("Leaf 3.2"));

// const branch2 = new Composite("Branch 2");
// branch2.add(new Item("Leaf 4.1"));
// branch2.add(new Item("Leaf 4.2"));

// tree.add(branch1);
// tree.add(branch2);

// tree.print();
