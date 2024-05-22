class OriginalImage {
  constructor(filename) {
    this.filename = filename;
    this.loadFromDisk();
  }

  display() {
    console.log(`Displaying ${this.filename}`);
  }

  loadFromDisk() {
    console.log(`Loading ${this.filename}`);
  }
}

class ProxyImage {
  constructor(filename) {
    this.filename = filename;
  }

  display() {
    if (!this.originalImage) {
      this.originalImage = new OriginalImage(this.filename);
    }
    this.originalImage.display();
  }
}

const proxyImage = new ProxyImage("photo1.jpg");
// proxyImage.display();
// proxyImage.display();
// proxyImage.display();
