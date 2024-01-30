abstract class Shape {
  abstract area(): number;
}

// Existing shapes
class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  area(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

class Rectangle extends Shape {
  constructor(private width: number, private height: number) {
    super();
  }

  area(): number {
    return this.width * this.height;
  }
}

// New shapes
class Triangle extends Shape {
  constructor(private base: number, private height: number) {
    super();
  }

  area(): number {
    return (this.base * this.height) / 2;
  }
}

class Square extends Shape {
  constructor(private side: number) {
    super();
  }

  area(): number {
    return Math.pow(this.side, 2);
  }
}

function calculateAreas(shapes: Shape[]): number[] {
  return shapes.map((shape) => shape.area());
}

function sumAreas(shapes: Shape[]): number {
  return calculateAreas(shapes).reduce((sum, area) => sum + area, 0);
}

export { Circle, Rectangle, Triangle, Square, calculateAreas, sumAreas };
