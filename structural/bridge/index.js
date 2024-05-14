// Implementor
class DrawingAPI {
  drawCircle(x, y, radius) {
    throw new Error("This method must be overwritten!");
  }
}

// Concrete Implementor
class DrawingAPI1 extends DrawingAPI {
  drawCircle(x, y, radius) {
    console.log(`API1.circle at ${x}:${y} radius ${radius}`);
  }
}

// Concrete Implementor
class DrawingAPI2 extends DrawingAPI {
  drawCircle(x, y, radius) {
    console.log(`API2.circle at ${x}:${y} radius ${radius}`);
  }
}

// Abstraction
class Shape {
  constructor(drawingAPI) {
    if (this.constructor === Shape) {
      throw new Error("Cannot instantiate abstract class");
    }
    this.drawingAPI = drawingAPI;
  }

  draw() {
    throw new Error("This method must be overwritten!");
  }

  resizeByPercentage() {
    throw new Error("This method must be overwritten!");
  }
}

// Refined Abstraction
class CircleShape extends Shape {
  constructor(x, y, radius, drawingAPI) {
    super(drawingAPI);
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

  draw() {
    this.drawingAPI.drawCircle(this.x, this.y, this.radius);
  }

  resizeByPercentage(pct) {
    this.radius *= pct;
  }
}

// Usage
const shapes = [
  new CircleShape(1, 2, 3, new DrawingAPI1()),
  new CircleShape(5, 7, 11, new DrawingAPI2()),
];

// for (let shape of shapes) {
//   shape.resizeByPercentage(2.5);
//   shape.draw();
// }
