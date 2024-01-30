import { ConsoleLogger, FileLogger, UserManager } from "./index";

describe("Dependency Inversion Principle example", () => {
  describe("UserManager", () => {
    it("should log to console", () => {
      const consoleSpy = jest.spyOn(console, "log");
      const logger = new ConsoleLogger();
      const userManager = new UserManager(logger);
      userManager.addUser({ name: "John" });
      expect(consoleSpy).toHaveBeenCalledWith("Console log: User John added.");
    });

    it("should log to file", () => {
      const consoleSpy = jest.spyOn(console, "log");
      const logger = new FileLogger();
      const userManager = new UserManager(logger);
      userManager.addUser({ name: "John" });
      expect(consoleSpy).toHaveBeenCalledWith("File log: User John added.");
    });
  });
});
