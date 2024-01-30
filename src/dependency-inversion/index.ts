/**
 * Dependency Inversion Principle states that high-level modules should not
 * depend on low-level modules. Both should depend on abstractions. Abstractions
 * should not depend on details, details should depend on abstractions.
 */
interface Logger {
  log(message: string): void;
}

interface User {
  name: string;
}

class ConsoleLogger implements Logger {
  log(message: string): void {
    console.log(`Console log: ${message}`);
  }
}

class FileLogger implements Logger {
  log(message: string): void {
    console.log(`File log: ${message}`);
  }
}

class UserManager {
  constructor(private logger: Logger) {}

  addUser(user: User): void {
    // Add user logic
    this.logger.log(`User ${user.name} added.`);
  }
}

export { ConsoleLogger, FileLogger, UserManager };
