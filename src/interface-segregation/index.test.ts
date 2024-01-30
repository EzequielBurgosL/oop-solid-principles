import { Duck, Ostrich, Penguin } from "./index";

describe("Interface Segregation Principle example", () => {
  describe("Duck", () => {
    it("should be able to swim", () => {
      const duck = new Duck();
      expect(duck.swim()).toEqual("I'm swimming");
    });

    it("should be able to walk", () => {
      const duck = new Duck();
      expect(duck.walk()).toEqual("I'm walking");
    });

    it("should be able to fly", () => {
      const duck = new Duck();
      expect(duck.fly()).toEqual("I'm flying");
    });
  });

  describe("Penguin", () => {
    it("should be able to swim", () => {
      const penguin = new Penguin();
      expect(penguin.swim()).toEqual("I'm swimming");
    });

    it("should be able to walk", () => {
      const penguin = new Penguin();
      expect(penguin.walk()).toEqual("I'm walking");
    });

    it("should not be able to fly", () => {
      const penguin = new Penguin();
      // @ts-ignore
      expect(penguin.fly).toBeUndefined();
    });
  });

  describe("Ostrich", () => {
    it("should be able to walk", () => {
      const ostrich = new Ostrich();
      expect(ostrich.walk()).toEqual("I'm walking");
    });

    it("should not be able to swim", () => {
      const ostrich = new Ostrich();
      // @ts-ignore
      expect(ostrich.swim).toBeUndefined();
    });

    it("should not be able to fly", () => {
      const ostrich = new Ostrich();
      // @ts-ignore
      expect(ostrich.fly).toBeUndefined();
    });
  });
});
