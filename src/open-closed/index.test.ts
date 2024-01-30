import {
  Circle,
  Rectangle,
  Square,
  Triangle,
  calculateAreas,
  sumAreas,
} from "./index";

describe("Open Close Principle example", () => {
  describe("calculateAreas", () => {
    it("should calculate the areas of multiple shapes", () => {
      const shapes = [
        new Circle(1),
        new Rectangle(2, 3),
        new Triangle(4, 5),
        new Square(6),
      ];

      expect(calculateAreas(shapes)).toEqual([Math.PI, 6, 10, 36]);
    });
  });

  describe("sumAreas", () => {
    it("should sum the areas of multiple shapes", () => {
      const shapes = [
        new Circle(1),
        new Rectangle(2, 3),
        new Triangle(4, 5),
        new Square(6),
      ];

      expect(sumAreas(shapes)).toEqual(Math.PI + 6 + 10 + 36);
    });
  });
});
