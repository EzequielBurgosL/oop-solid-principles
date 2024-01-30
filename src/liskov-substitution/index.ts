abstract class Shape {
  abstract area(): number;
}

class Circle implements Shape {
  constructor(private radius: number) {}

  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}

  area(): number {
    return this.width * this.height;
  }
}

// Shape instances can be used interchangeably
function calculateArea(shape: Shape) {
  return shape.area();
}

export { Circle, Rectangle, calculateArea };
