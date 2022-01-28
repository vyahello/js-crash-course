'use strict';

// funcs - are first class citizens - simply values, another "type" of object
// treats are values, pass func to other func
// higher-order func - func that receives another func as an arg, that returns a new func or both

/*
const bookings = [];

const createBooking = function (f, n = 1, p = 199) {
  const booking = {
    f,
    n,
    p,
  };
  console.log(booking); // {f: 'L', n: undefined, p: undefined}
  bookings.push(booking);
};

createBooking('L');

const flight = 'LH';
const jonas = {
  name: 'John S',
  passport: 121212,
};
const checkIn = function (f, p) {
  f = 'Lh999';
  p.name = 'Mr. ' + p.name;

  if (p.passport == 121212) {
    alert('Check In');
  } else {
    alert('Wrong passport');
  }
};
checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

const newPass = function (person) {
  person.passport = Math.trunc(Math.random() * 10000);
};
newPass(jonas);
checkIn(flight, jonas);

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};
// Higher-order functions
const transformer = function (str, fn) {
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};
transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('Hello');
};
document.body.addEventListener('click', high5);
['F', 'M'].forEach(high5);

// func returns new func
const greet = function (greet) {
  return function (name) {
    console.log(`${greet} ${name}`);
  };
};

const greet = greet => name => console.log(`${greet} ${name}`);

// useful in functional programming
const greetHey = greet('Hey'); // it is a closure, return new func
greetHey('John');
greet('Hello')('John');

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Does NOT work
// book(23, 'Sarah Williams'); // will be undefined

// Call method - manually sets 'this' keyword as first argument
book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings);

book.call(lufthansa, 33, 'Sam MM');

// Apply method
const flightData = [583, 'George Cooper'];
book.apply(lufthansa, flightData);
// console.log(lufthansa);
book.call(lufthansa, ...flightData); // the same as book.apply()

// Bind method
const bookEW = book.bind(eurowings); // not call but return new func
bookEW(23, 'Steve');

const bookEW33 = book.bind(eurowings, 33);
bookEW33('Mike');

// With event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this); // <button class="buy">Buy new plane 🛩</button>
  this.planes++;
  console.log(this.planes);
};
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane);
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa)); // will be {} object

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23
console.log(addVAT(100));
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
*/

// Execute func once
(function () {
  console.log('Will never run again');
})();
(() => console.log('Will also never run again'))();

// Closures - remembers vars of func upper scope, func returns other func
// innder func can access to upper func
// gives access to all the parent func variables
const secureBook = function () {
  let pass = 0;
  return function () {
    pass++;
    console.log(`${pass} count`);
  };
};
const booker = secureBook();
booker();
booker();
booker(); // 3 count

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 77;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();

h();
f();
console.dir(f); // as dir in python

// Timer
const boardPass = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    // callback
    console.log(`We are now boarding all ${n} passangers`);
    console.log(`3 groups - ${perGroup} passangers`);
  }, 1000); // func will be executed after 1 sec - callback, called later

  console.log(`Will start boarding in ${wait} seconds`);
};
boardPass(180, 3);
