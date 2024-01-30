import { Circle, Rectangle, calculateArea } from "./index";

describe("Liskov Substitution Principle example", () => {
  it("should calculate circle area", () => {
    const circle = new Circle(10);
    expect(calculateArea(circle)).toBe(314.1592653589793);
  });

  it("should calculate rectangle area", () => {
    const rectangle = new Rectangle(10, 10);
    expect(calculateArea(rectangle)).toBe(100);
  });
});
