class Text {
  constructor(value) {
    this.value = value;
  }

  get() {
    return this.value;
  }
}

class BoldTextDecorator {
  constructor(value) {
    this.value = value;
  }

  get() {
    return `<b>${this.value}</b>`;
  }
}

class ItalicTextDesorator {
  constructor(value) {
    this.value = value;
  }

  get() {
    return `<i>${this.value}</i>`;
  }
}
