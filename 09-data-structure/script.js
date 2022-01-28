'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // start from ES6
  openingHours,

  order: function (sInx, mIdx) {
    return [this.starterMenu[sInx], this.mainMenu[mIdx]];
  },

  orderDelivery: function ({ sIdx = 1, mIdx = 0, time = '20:00', address }) {
    // desctructing the values, unpacking from the object, have default values
    console.log(
      `Order received! ${this.starterMenu[sIdx]} and ${this.mainMenu[mIdx]} will be delivired to ${address} at ${time}`
    );
  },
  // we can also do orderPasta (ing1, ing2, ing3) {...}
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
  orderPizza: function (mainIng, ...otherIng) {
    console.log(mainIng); // mush
    console.log(otherIng); // ['onion', 'olives', 'spinach']
  },
};

/*
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del',
  mIdx: 2,
  sIdx: 2,
});
restaurant.orderDelivery({ address: 'La Fut' });

// Object desctructure
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// default value for menu is [], starterMenu is called starters with [] default value
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating vars
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj); // 23 7
console.log(a, b);

// nested objects
const {
  fri: { open: o, close: c },
} = openingHours; // fri: {open: 11, close: 23}, get object by 'fri' key
console.log(o, c); // {open: 11, close: 23}

// Array destruct
const arr = [2, 3, 4];
const [x, y, z] = arr;
console.log(x, y, z);

let [f, , s] = restaurant.categories; // skips 'Pizzeria'
console.log(f, s);

// switch variables
// let temp = f;
// f = s;
// s = temp;
// console.log(f, s);

// other option - destructuring assignment
[f, s] = [s, f];
console.log(f, s);
// Receive 2 return values from a function
const [starter, main] = restaurant.order(2, 0);
console.log(starter, main);

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

// nested desrtucturing
const [i, , [j, k]] = nested;
console.log(i, j, k);

// default values
const [p, q, r] = [8, 9];
console.log(p, q, r); // last is undefined

const [pp = 1, qq = 1, rr = 1] = [8, 9]; // set default values
console.log(pp, qq, rr); // last is undefined


// Spread operator
const arr = [7, 8, 9];
const newArr = [1, 2, ...arr]; // expand array
console.log(newArr);
console.log(...newArr); // log individually
const newMenu = [...restaurant.mainMenu, 'Nocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables - arrays, string, maps, sets
const string = 'Jonas';
const letters = [...string, ' ', 'S.']; // ['J', 'o', 'n', 'a', 's', ' ', 'S.']
console.log(letters);
console.log(...string);

const ingredients = [
  prompt("Let's make pasta ing1"),
  prompt("Let's make pasta ing2"),
  prompt("Let's make pasta ing3"),
];
console.log(ingredients);
restaurant.orderPasta(...ingredients);

// Objects
const newRest = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' }; // copy all properties from rest to new one
console.log(newRest);
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristor';
console.log(restaurant); // different
console.log(restaurantCopy); // different

// REST pattern - to pack elements in an array
const arr = [1, 2, ...[3, 4]];
const [a, b, ...others] = [1, 2, 3, 4, 5, 6];
console.log(a, b, others); // save 3, 4, 5, 6 to others var

const [pizza, , risstto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risstto, otherFood); // Pizza Risotto ['Focaccia', 'Bruschetta']

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays); // {thu: {…}, fri: {…}}

// Functions
const add = function (...numbers) {
  // as positional args in python
  console.log(typeof numbers); // object array
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    console.log(sum);
  }
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2);

const x = [23, 5, 7];
add(...x); // unpack values

restaurant.orderPizza('mush', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mush'); // will be mush and []

// Logical
console.log(3 || 'Jonas'); // 3
console.log(undefined || null); // null
console.log(0 || '' || 'Jonas'); // 'Jonas'
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);
console.log(7 && 'John'); // John
console.log('H' && 23 && null && 'j'); // null, stop on non true value

if (restaurant.orderPasta) {
  restaurant.orderPizza('mush');
}

if (restaurant.o && restaurant) console.log('Yay'); // no output


// nullish coalesing operator - only null and undefined (no 0 or '')
restaurant.numGuests = 0;
const gestCorrect = restaurant.numGuests ?? 10; // 0
console.log(gestCorrect);

const rest1 = {
  name: 'Capri',
  numGeusts: 20,
};
const rest2 = {
  name: 'La Pizza',
  owner: 'Possi',
};

rest1.numGeusts = rest1.numGeusts || 10;
rest2.numGeusts = rest2.numGeusts || 10;

rest1.numGeusts ||= 10; // same as above
rest2.numGeusts ||= 10; // same as above

rest1.numGeust ??= 10; // check if value is nullish
rest2.numGeusts ??= 10;

rest1.owner = rest1.owner && '<ANON>'; // undefined
rest2.owner = rest2.owner && '<ANON>'; // ANON
rest1.owner &&= '<ANON>'; // the same as above
rest2.owner &&= '<ANON>'; // the same as above

console.log(rest1);
console.log(rest2);

// Loops for-of
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item); // start from ES6
for (const [idx, el] of menu.entries()) {
  // print idx + value
  console.log(idx, el);
}
console.log([...menu.entries()]); // 7 Arrays


// Optional chaining
console.log(restaurant.openingHours.mon?.open); // if prop exists (not null/undefined) call .open

for (const day of weekdays) {
  console.log(restaurant.openingHours[day]);
  const open = restaurant.openingHours[day]?.open ?? 'closed'; // 'closed' if null/undefined
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist'); // check if order method exists - then call it
console.log(restaurant.orderRi?.(0, 1) ?? 'Method does not exist');

// Arrays
const users = [{ name: 'jonas' }];
console.log(users[0]?.name ?? 'user array empty');

// the same as above
// if (users[0]) {
//   console.log(users[0].name);
// }

// Looping objects
for (const day of Object.keys(openingHours)) {
  // loop over keys of object
  console.log(day);
}
const prop = Object.keys(openingHours);
console.log(prop); // ['thu', 'fri', 'sat']

const values = Object.values(openingHours);
console.log(values); // [{open: 12, close: 22}, ...]

const ent = Object.entries(openingHours); // [['thu', {...}, ...]]
console.log(ent);

// desctruct elements of object
for (const [key, { open, close }] of ent) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

// Sets - collection of unique values
// use case - remove duplicates from array
const orderSet = new Set(['Pasta', 'Pizza', 'Pizza']);
console.log(orderSet); // {'Pasta', 'Pizza'}
console.log(new Set('John'));
console.log(orderSet.size);
console.log(orderSet.has('Pasta')); // include
orderSet.add('Garlic');
orderSet.delete('Pasta');
orderSet.clear(); // empty
console.log(orderSet);
console.log(orderSet[0]); // indefined, sets dont have indexes

for (const order of orderSet) console.log(order);
const uniq = [...new Set([1, 1, 10])];
console.log(uniq);

// Maps - as dict in python
const rest = new Map();
rest.set('name', 'Classic Italiano'); // returns updated map
rest
  .set('cat', ['Ital', 'Pizzeria', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open');
console.log(rest.set(1, 'Formula'));
console.log(rest.get('name')); // read the data

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
rest.delete(2);
console.log(rest.has('cat'));
console.log(rest.size);
console.log(rest.clear());

const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest);
console.log(rest.get(arr)); // wont work cuz different objects

const ques = new Map([
  ['question', 'Best programming language?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JS'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again'],
]);
console.log(ques);
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours)); // the same
console.log(hoursMap);

console.log(ques.get('question'));
for (const [key, value] of ques) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

console.log(ques.get(ques.get('correct') === 3));

// Convert map to array
console.log([...ques]);
console.log(ques.entries());
console.log(ques.values()); // MapIterator {'Best programming language?', 'C', 'Java', 'JS'}
console.log(...ques.values());

// What structure is better?
// Data fetch from program, UI (user input in DOM), API
// Objects/maps - describe values, object anyt key/value e.g JSON
// common data - array of objects
// there are also WeakSet, WeakMap

// Array vs Sets
// array for data manipulation, set for unique high performance

// Objects vs Maps
// objects -  easier to write, access via obj.key, used in JSON
// maps - better performance, when you need keys that are not strings

// Strings
const air = 'TAP Air Portugal';
const plane = 'A320AA';
console.log(plane.length);
console.log(plane.indexOf('A'));
console.log(plane.lastIndexOf('A'));
console.log(air.slice(4)); // cut 'TAP ' and return new item
console.log(air.slice(4, 7)); // Air

console.log(air.slice(0, air.indexOf(' ')));
console.log(air.slice(air.lastIndexOf(' ') + 1));

console.log(air.slice(-2)); // last two letters - 'al
console.log(air.slice(1, -1)); // 'AP Air Portuga'

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got middle seat');
};
checkMiddleSeat('11B');

console.log(new String('john').slice(-1));

console.log(air.toLowerCase());
console.log(air.toUpperCase());

const pass = 'jOhN';
const passLower = pass.toLowerCase();
const passCorrect = pass[0].toUpperCase() + passLower.slice(1);
console.log(passCorrect);

const email = 'hello@jonas.io';
const loginEmail = ' Hello@Jonas.Io \n';
const nor = loginEmail.toLowerCase().trim();
console.log(nor);

// replacing
const price = '288.97E';
const priceUS = price.replace('E', '$');
console.log(priceUS);

// regex
const anon = 'Lala door foo';
console.log(anon.replace(/door/g, 'fake')); // use regex to replace

const pll = 'A32neo';
console.log(pll.includes('neo')); // true
console.log(pll.startsWith('A'));
console.log(pll.endsWith('o'));

console.log('a+a+v+c'.split('+')); // array

const [f, s] = 'A F'.split(' ');
console.log(f, s);

const newName = ['Mr.', f, s.toUpperCase()].join(' '); // join element into string
console.log(newName);

const capName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const word of names) {
    // namesUpper.push(word[0].toUpperCase() + word.slice(1));
    namesUpper.push(word.replace(word[0], word[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

const pass = 'jessin ann smith';
capName(pass);

// Padding
const msg = 'Go to gate 23!';
console.log(msg.padStart(25, '+')); // '+++++++++++Go to gate 23!' - length 25
console.log('John'.padStart(23, '+').padEnd(35, '+'));

const maskCreditCard = function (number) {
  const str = number + ''; // convert to string
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};
console.log(maskCreditCard(421213423243213));

const msg2 = 'Bad weather ...';
console.log(msg2.repeat(5)); // repeats the same string 5 times

const plainesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'!'.repeat(5)}`);
};
plainesInLine(5); // There are 5 planes in line !!!!!
*/

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  // replaceAll in ES2021
  const out = `${type.startsWith('Delayed') ? 'Block' : 'GO'}${type.replaceAll(
    '_',
    ' '
  )} ${getCode(from)} ${to} (${time.replace(':', 'h')})`.padStart(40);
  console.log(out);
}
