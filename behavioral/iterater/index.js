class Iterator {
  constructor(items = []) {
    this.index = 0;
    this.items = items;
  }

  current() {}

  key() {}

  next() {}

  valid() {}
  rewind() {}
}

class AlphabeticalOrderIterator extends Iterator {
  constructor(items = [], order = 1) {
    super(items);
    this.order = order; // 1 for asc and -1 for desc
    this.index = order === 1 ? 0 : items.length - 1;
  }
  current() {
    return this.items[this.index];
  }

  key() {
    return this.index;
  }

  next() {
    const item = this.items[this.index];

    if (this.order === 1) {
      this.index++;
    } else {
      this.index--;
    }

    return item;
  }

  valid() {
    if (this.order === 1) {
      return this.index < this.items.length;
    } else {
      return this.index >= 0;
    }
  }
  rewind() {
    this.index = this.order === 1 ? 0 : this.items.length - 1;
  }
}

class Collection {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  getIterator() {
    return new AlphabeticalOrderIterator(this.items);
  }
}

const collection = new Collection();
collection.addItem("A");
collection.addItem("B");
collection.addItem("C");

const iterator = collection.getIterator();

while (iterator.valid()) {
  console.log(iterator.current());
  iterator.next();
}
