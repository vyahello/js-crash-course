'use strict';

// js is a high level, prototype bases oop, interpreted, in-time compiled
// single threaded, garbage-collected language

// high level - dont need to manage resources ram + cpu as in c (low level)
// garbage collection - remove all unused objects from the memory
// interpreted - converted into machine code inside js engine
// multi-paradigm - procedural, oop, functional

// prototype based - prototypal inheritance
// let a = [1, 2]; built from prototype - Array.prototype.push/indexOf etc.

// first class funcs - funcs are treated as variables, we can pass funcs into other funcs
// and return from funcs

// dynamic - dynamically typed
// single threaded - it can do one thing at the same time.
// event loop - takes long running tasks, executes them in background and puts them
// back in the main thread once they are finished.

// JS engine - program that executes js code. every browser has it's engine
// popular - V8 engine
// comlilation - code is converted into machine code and written to binary file that pc can execute
// interpretation - intepreter runs via the source code and executed it line by line

// JIT (just in time compilation) - code is converted into machine code and executed immediately. Modern JS engine uses it.

/*
// Scope
// global scope
// const me = 'Jake' (in func will be local scope)

function calcAge(birth) {
  const age = 2017 - birth;

  function printAge() {
    const output = `You are ${age}, born in ${birth}`;
    console.log(output);

    if (birth >= 1981 && birth <= 1996) {
      var millenial = true;
      const str = 'Millenial';
      console.log(str);
    }
  }
  printAge();
}

calcAge(1991);

// Hoisting - makes some types of variable accessible in the code before they are declared
// console.log(year); wont work

console.log(addDecl(1, 2));
// console.log(addExp(1, 2)); won't work

var me = 'John';
let job = 'teacher';
const year = 1991;

function addDecl(a, b) {
  return a + b;
}

var addExp = (a, b) => a + b;

// Example
if (!numProduct) deleteCart(); // numProduct is undefined here
var numProduct = 10; // adds numProduct to window (global) scope - bad (global), can see it with let/const -> window.numProduct

const l = 1;
function deleteCart() {
  console.log('All products are deleted');
}

// this keyword - it an object itself
console.log(this); // is a window

const calcAge = function (birth) {
  console.log(this); // undefined
};
calcAge();

const j = {
  year: 1991,
  calcAge: function () {
    console.log(this);
  },
};
j.calcAge();
const matilda = { year: 2017 };
matilda.calcAge = j.calcAge; // method borrowing
matilda.calcAge();

const f = j.calcAge;
f(); // undefined

const john = {
  firstName: 'John',
  year: 1991,
  calcAge: function () {
    // Solution 1
    // console.log(this);
    // const self = this;
    // const isMel = function () {
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };
    // isMel();

    // Solution 2
    // arrow func can access this from object scope
    const isMel = () => {
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMel();
  },

  // greet: () => console.log(`Hey ${this.firstName}`), // bad -> undefined in arrow func
  // this.firstName === window.firstName from global scope
  // dont use arrow func in objects
  greet: function () {
    console.log(`Hey ${this.firstName}`);
  },
};
john.greet();
john.calcAge();

const addExp = function (a, b) {
  console.log(arguments); // print arguments
  return a + b;
};

var addArrow = (a, b) => {
  console.log(arguments); // will fail
  return a + b;
};
addExp(2, 5);
addArrow(2, 5);
*/

// Primitives - numbers, string, booleans, undefined, null, synbol, biging
// Objects - object literal, arrays, functions, reference types
let age = 30;
let oldAge = age;
age = 31;
console.log(oldAge);
console.log(age);

const me = {
  name: 'john',
  age: 30,
};
const friend = me; // will change both object
friend.age = 27;
console.log(friend);
console.log(me);

let lastName = 'Will';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName); // will be different

const jessica = {
  firstName: 'Jessica',
  lastName: 'Will',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis'; // will change both
console.log(jessica);
console.log(marriedJessica);

// Copy objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Will',
  age: 27,
  family: ['Alice', 'Bob'],
};
const jessicaCopy = Object.assign({}, jessica2); // will be different
jessicaCopy.lastName = 'Davis';
jessicaCopy.family.push('Mary'); // change in both objects
console.log(jessica2);
console.log(jessicaCopy);
