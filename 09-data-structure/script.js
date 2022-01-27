'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (sInx, mIdx) {
    return [this.starterMenu[sInx], this.mainMenu[mIdx]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderDelivery: function ({ sIdx = 1, mIdx = 0, time = '20:00', address }) {
    // desctructing the values, unpacking from the object, have default values
    console.log(
      `Order received! ${this.starterMenu[sIdx]} and ${this.mainMenu[mIdx]} will be delivired to ${address} at ${time}`
    );
  },
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
*/

// Logical
