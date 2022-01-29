'use strict';

// abstraction - ignore/hide details that dont matter, use only methods that we need (homeBtn, volumeBtn, screen)
// encapculation - keep prop and methods private inside the class, some methods can be exposed as a public interface.
// inheritance - making all prop and methods available to a child class
// polymorphism - child classs can overwrite method it inherited from a parent class

// func constructor
const Person = function (firstName, birth) {
  // Instance properties
  this.firstName = firstName;
  this.birth = birth;

  // Methods - dont do this
  //   this.calcAge = function () {
  //     console.log(2037 - this.birth);
  //   };
};

const john = new Person('John', 1991);
const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(jack);

console.log(john instanceof Person);

// Prototypes
// if method is not found in object js will look for it in the prototype
// behaves as base class to Person, as base template
Person.prototype.calcAge = function () {
  // add method to object
  console.log(2037 - this.birth);
};
console.log(Person.prototype);
john.calcAge();
console.log(john.__proto__); // prototype of jonas
console.log(john.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(john)); // true

Person.prototype.species = 'Sap';
console.log(john);
console.log(john.hasOwnProperty('firstName'));

console.log(john.__proto__); // {species: 'Sap', calcAge: ƒ, constructor: ƒ}
console.log(john.__proto__.__proto__); // {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
console.log(john.__proto__.__proto__.__proto__); // null
console.log(Person.prototype.constructor); // ƒ (firstName, birth) {

const arr = [3, 6, 4, 5, 7]; // created by Array constructor
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype); // true
// Array.prototype.filter() - live in the prototype of array constructor

// add method to base data structure, bad idea
Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);

// CLASSES
// are just syntax sugar for above logic, introduced in ES6

// class expression
// const PersonCl = class {}

// class declaration
class PersonCl {
  constructor(fullName, birth) {
    this.fullName = fullName;
    this.birth = birth;
  }

  // Instance method will be added tp the .prototype property
  calcAge() {
    return 2017 - this.birth;
  }

  get age() {
    return 2037 - this.birth;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
  }

  get fullName() {
    return this._fullName;
  }

  // not available on instances
  static hey() {
    return 'Static method';
  }
}

const walter = new PersonCl('Walter White', 1965);

const jess = new PersonCl('Jess', 1996);
console.log(jess.calcAge());

console.log(jess.__proto__ === PersonCl.prototype); // true

PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};
jess.greet();
console.log(jess.age);

// 1. Classes are not hoisted
// 2. Classes are first class citizens
// 3. Classes are executed in strict mode

// Setters + getters
const acc = {
  owner: 'John',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};
console.log(acc.latest);
acc.latest = 10;
console.log(acc.movements);

// Static methods
const m = Array.from(document.querySelectorAll('h1'));
console.log(m);
Number.parseInt('1');

// add static method
Person.hey = function () {
  console.log('Hey!!');
  console.log(this); // constructor
};
Person.hey();
PersonCl.hey();
