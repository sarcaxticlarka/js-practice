JavaScript has classes. Introduced in ECMAScript 6 (ES6), classes in JavaScript provide a more traditional and familiar syntax for creating objects and dealing with inheritance. They are syntactical sugar over JavaScript's existing prototype-based inheritance.

##OOP(OBJECT ORIENTED PROGRAMMING)

##Object
- collection of properties and methods
- toLowerCae


##why use OOP


## parts of OOP
Object Literal

-Constructor function
-Prototype
-Classes
-Instances


## 4 PILLARS
ABSTRACTION 
ENCAPULATION
INHERITANCE
POLYMORPHISM




Parts of OOP
## 1. Object Literal
An object literal is the simplest way to create an object in JavaScript. It allows you to define an object with properties and methods directly.

 ```java scripts
const car = {
  make: 'Toyota',
  model: 'Camry',
  year: 2020,
  startEngine: function() {
    console.log('Engine started');
  }
};

car.startEngine(); // Output: Engine started

```

## 2. Constructor Function
A constructor function is a function used to create multiple instances of an object. It serves as a blueprint for creating objects.

 ```java scripts
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

const person1 = new Person('Alice', 30);
person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
```


## 3. Prototype
In JavaScript, every function and object has a prototype property. Prototypes are the mechanism by which JavaScript objects inherit features from one another.

 ```java scripts
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  console.log(`${this.name} makes a noise.`);
};

const animal1 = new Animal('Dog');
animal1.speak(); // Output: Dog makes a noise.
```
## 4. Classes
Classes provide a more structured and syntactically cleaner way to define objects and handle inheritance.

 ```java scripts
class Employee {
  constructor(name, position) {
    this.name = name;
    this.position = position;
  }

  work() {
    console.log(`${this.name} is working as a ${this.position}.`);
  }
}

const employee1 = new Employee('Bob', 'Developer');
employee1.work(); // Output: Bob is working as a Developer.
```

## 5. Instances
An instance is an individual object created using a constructor function or class.

 ```java scripts
const employee2 = new Employee('Charlie', 'Designer');
employee2.work(); // Output: Charlie is working as a Designer.
```
### The Four Pillars of OOP
# 1. Abstraction
Abstraction means hiding the complex reality while exposing only the necessary parts. It helps in reducing programming complexity and effort.

Example:

 ```java scripts
class CoffeeMachine {
  makeCoffee() {
    this.boilWater();
    this.brewCoffeeGrinds();
    this.pourInCup();
    this.addSugar();
    console.log('Coffee is ready!');
  }

  boilWater() {
    console.log('Boiling water...');
  }

  brewCoffeeGrinds() {
    console.log('Brewing coffee grinds...');
  }

  pourInCup() {
    console.log('Pouring coffee into cup...');
  }

  addSugar() {
    console.log('Adding sugar...');
  }
}

const machine = new CoffeeMachine();
machine.makeCoffee();
// Output:
// Boiling water...
// Brewing coffee grinds...
// Pouring coffee into cup...
// Adding sugar...
// Coffee is ready!```
In this example, the makeCoffee method abstracts the complexity of making coffee by calling several private methods.

## 2. Encapsulation
Encapsulation is the bundling of data and methods that operate on the data within a single unit, or class, and restricting access to some of the object's components.

Example:

 ```java scripts
class BankAccount {
  #balance;

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited ${amount}. New balance is ${this.#balance}.`);
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrew ${amount}. New balance is ${this.#balance}.`);
    } else {
      console.log('Insufficient balance.');
    }
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount(1000);
account.deposit(500); // Output: Deposited 500. New balance is 1500.
account.withdraw(200); // Output: Withdrew 200. New balance is 1300.
console.log(account.getBalance()); // Output: 1300
```
Here, the balance is encapsulated within the BankAccount class and cannot be accessed directly from outside.

3. Inheritance
Inheritance is a mechanism where a new class derives properties and behaviors (methods) from an existing class.

Example:

 ```java scripts
class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  start() {
    console.log(`${this.make} ${this.model} is starting.`);
  }
}

class Car extends Vehicle {
  constructor(make, model, doors) {
    super(make, model);
    this.doors = doors;
  }

  honk() {
    console.log('Honk! Honk!');
  }
}

const myCar = new Car('Honda', 'Civic', 4);
myCar.start(); // Output: Honda Civic is starting.
myCar.honk();  // Output: Honk! Honk!
```
In this example, Car inherits from Vehicle, so it has access to the start method.

# 4. Polymorphism
Polymorphism allows objects of different classes to be treated as objects of a common superclass. It also allows a method to do different things based on the object it is acting upon.

Example:

 ```java scripts
class Bird {
  speak() {
    console.log('Bird is making a sound');
  }
}

class Parrot extends Bird {
  speak() {
    console.log('Parrot says: Hello!');
  }
}

class Crow extends Bird {
  speak() {
    console.log('Crow says: Caw!');
  }
}

const bird1 = new Parrot();
const bird2 = new Crow();

bird1.speak(); // Output: Parrot says: Hello!
bird2.speak(); // Output: Crow says: Caw!
```


In this example, the speak method is overridden in the Parrot and Crow classes, demonstrating polymorphism.

 