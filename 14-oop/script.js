'use strict';

// abstraction - ignore/hide details that dont matter, use only methods that we need (homeBtn, volumeBtn, screen)
// encapculation - keep prop and methods private inside the class, some methods can be exposed as a public interface.
// inheritance - making all prop and methods available to a child class
// polymorphism - child classs can overwrite method it inherited from a parent class

/*

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

// Object.create
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birth);
  },

  init(firstName, birth) {
    this.firstName = firstName;
    this.birth = birth;
  },
};

const steven = Object.create(PersonProto);
steven.name = 'Steven';
steven.birth = 2002;
console.log(steven);

console.log(steven.__proto__ === PersonProto);
const sarah = Object.create(PersonProto);
console.log(sarah);
sarah.init('Sarah', 1979);
sarah.calcAge();

// Inheritance using constructor functions
const Person = function (firstName, birth) {
  // Instance properties
  this.firstName = firstName;
  this.birth = birth;
};
Person.prototype.calcAge = function () {
  console.log(2037 - this.birth);
};

const Student = function (firstName, birth, course) {
  Person.call(this, firstName, birth);
  this.course = course;
};
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`${this.firstName} and ${this.course}`);
};

const mike = new Student('Mike', 2020, 'CS');
console.log(mike);
mike.introduce();
mike.calcAge();
console.log(mike.__proto__); // Person {introduce: ƒ}
console.log(mike.__proto__.__proto__); // {calcAge: ƒ, constructor: ƒ}
console.log(Student.prototype.constructor);
console.log(mike instanceof Student); // true
console.log(mike instanceof Person); // true
console.log(mike instanceof Object); // true

Student.prototype.constructor = Student;
console.log(Student.prototype.constructor);

// class ES6 inheritance
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

class Student extends PersonCl {
  constructor(fullName, birth, course) {
    // constructor of paranet class
    // needs to happen first
    super(fullName, birth);
    this.course = course;
  }

  introduce() {
    console.log(`Introduce ${this.fullName}`);
  }

  calcAge() {
    console.log('Redefined');
  }
}
const marta = new Student('Marh S', 2002, 'CS');
marta.calcAge();
console.log(marta);

// Inheritance - Object.create
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birth);
  },

  init(firstName, birth) {
    this.firstName = firstName;
    this.birth = birth;
  },
};

const steven = Object.create(PersonProto);
const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birth, course) {
  PersonProto.init.call(this, firstName, birth);
  this.course = course;
};
StudentProto.intro = function () {
  console.log('Intro');
};
const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'CS');
jay.intro();
*/

class Account {
  university = 'Lishon';
  // private fields (available on instances)
  #move = [];
  #pin;
  // available on class only
  static numSubject = 10;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    this._movements = [];
    this.local = navigator.language;
    this.#move = [];
  }

  get movements() {
    return this._movements;
  }

  // public interface - API
  deposit(val) {
    this._movements.push(val);
    return this;
  }

  withDrawal(val) {
    this.deposit(-val);
    return this;
  }

  apprroveLoad(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoad(val)) {
      this.deposit(val);
      console.log(`Load approved`);
    }
    return this;
  }

  // privete methods
  _approveLoad(val) {
    return true;
  }

  // will be in next release
  //   #approveLoad(val) {
  //     return true;
  //   }
}
const acc = new Account('John', 'EUR', 111);
// acc.movements.push(250);
// acc.movements.push(-140);
acc.deposit(250);
acc.withDrawal(140);
console.log(acc);
console.log(acc.movements);
console.log(acc.university);
// console.log(acc.#move);

// Chain methods
acc.deposit(300).deposit(500).requestLoan(500).withDrawal(300);
console.log(acc.movements);
console.log(acc.numSubject);
