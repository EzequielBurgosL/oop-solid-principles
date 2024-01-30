# SOLID Principles of OOP

This repository contains 5 simple examples of the SOLID principles (1 example per principle) in typescript. The intention is to show how can they be applied on a practical level. 

## How to install and run the tests

Install dependencies:
```bash
yarn install
```

Run tests:
```bash
yarn test
```

## Basic Theory

### Single Responsibility Principle

Single Responsibility Principle states that a class should have only one reason to change. In other words, a class should have only one job.

### Open-Closed Principle

Open-Closed Principle states that software entities should be open for extension, but closed for modification. In other words, you should be able to add new functionality without changing existing code.

### Liskov Substitution Principle

Liskov Substitution Principle states that objects of a superclass shall be replaceable with objects of its subclasses without breaking the application.

### Interface Segregation Principle

Interface Segregation Principle states that no class should be forced to implement methods or interfaces it does not use.

### Dependency Inversion Principle

Dependency Inversion Principle states that high-level modules should not depend on low-level modules. Both should depend on abstractions. Abstractions should not depend on details, details should depend on abstractions.
