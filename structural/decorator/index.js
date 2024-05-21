class Text {
  constructor(value) {
    this.value = value;
  }

  get() {
    return this.value;
  }
}

class BoldTextDecorator extends Text {
  constructor(value) {
    super(value);
  }

  get() {
    return `<b>${this.value}</b>`;
  }
}

class ItalicTextDesorator extends Text {
  constructor(value) {
    super(value);
  }

  get() {
    return `<i>${this.value}</i>`;
  }
}
