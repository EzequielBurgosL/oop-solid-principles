/**
 * Interface Segregation Principle states that no class should be forced
 * to implement methods or interfaces it does not use.
 */
interface Swimmable {
  swim(): string;
}

interface Walkable {
  walk(): string;
}

interface Flyable {
  fly(): string;
}

export class Ostrich implements Walkable {
  walk(): string {
    return "I'm walking";
  }
}

export class Penguin implements Swimmable, Walkable {
  swim(): string {
    return "I'm swimming";
  }

  walk(): string {
    return "I'm walking";
  }
}

export class Duck implements Swimmable, Walkable, Flyable {
  swim(): string {
    return "I'm swimming";
  }

  walk(): string {
    return "I'm walking";
  }

  fly(): string {
    return "I'm flying";
  }
}
