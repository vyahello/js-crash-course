/*
// values
let js = 'az';
console.log(60);

let firstName = 'Mike';
console.log(firstName);

let $function = 27;
console.log($function);

let myFirstJob = 'Programmer';

// data types
let age = 23; // number
// string
let fullAge = true; // boolean
let children; // undefined
null  // empty value
// symbol // unique and cannot be changed
// bigint  // large integers

console.log(typeof true); // check type
console.log(typeof children); // check type

let year;
year = 1991;
console.log(typeof year);

// declare vars
let ag = 30;
ag = 31; // we can mutate var with let, use it in case of change

const birthYear = 1991 // cannot be changed
// birthYear = 1990;
// const job; -> illegal
// var - don't use it, used priour the ES6 (old way), same as let

lastName = 'Shm'; // bad, js creates property on global object, but not in current scope
console.log(lastName)

// operators
const ageJ = 2037 - 1991;
console.log(ageJ)
console.log(ageJ * 2, ageJ / 2, ageJ ** 2);

const firstName = 'Jo';
const lastName = 'Man';
console.log(firstName + ' ' + lastName);

let x = 5;
x += 10;
x++; // + 1
console.log(x);

let y, z;
y = z = 25 - 10 - 5;
console.log(y, z);

// strings
const firstName = 'John';
const job = 'teacher';
const birth = 1991;

const jonasNew = `I'm ${firstName}, a ${37} year old ${job}`;
console.log(jonasNew);

console.log('String with \n\
multiple \n\
lines');
console.log(`String with
multiple
lines`);

// decisions
const age = 15;
const isOldEnough = age >= 19
console.log(isOldEnough);

if (isOldEnough) {
    console.log('Sarah can start driving license');
}
else {
    const yearLeft = 18 - age;
    console.log(`Wait another ${yearLeft} years`);
}

const birthYear = 1991;
let century;
if (birthYear <= 2000) {
    century = 20;
}
else {
    century = 21;
}
console.log(century);


// type conversion
const year = '1991';
// console.log(year + 18); // 199118
console.log(Number(year) + 18);
console.log(Number('String')); // NaN (not a number)
console.log(String(23), 23);
// js can convert something to int, string or boolean

// type coersion
console.log("I'm " + 23 + ' years old');
console.log('23' - '10' - 3); // will be number
console.log('23' * '2'); // will be number
console.log('23' / '2'); // will be number
console.log('23' + '10' + 3); // will be string


let n = '1' + 1;
n = n - 1;
console.log(10);
console.log(2 + 3 + 4 + '5'); // 95
console.log('10' - '2' + '5'); // 85

// boolean
// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean('')); // false
console.log(Boolean('JJ')); // true
console.log(Boolean({})); // true

let height;
if (height) {
    console.log('defined');
}
else {
    console.log('sorry');
}

// quality operators
const age = 18;
// strict, dont perform type coersion
if (age === 18) console.log('adult'); // if one if the wont need {}
// loose == operator, perform type coersion
if (age == '18') console.log('adult');

const fav = prompt("What's your age?");
console.log(fav);
console.log(typeof fav);

if (fav === 18) { // strict 18 number
    console.log('Yay!')
}
else if (fav === 7) {
    console.log('Good');
}
else {
    console.log('neither 18 nor 7');
}

if (fav !== 18) console.log('Different');

// logic
const hasLicense = true;
const hasVision = true;
console.log(hasLicense && hasLicense);
console.log(hasLicense || hasLicense);
console.log(!hasLicense);

// switch
const day = 'monday';

switch (day) { // day === 'monday'
    case 'monday':
        console.log('Plan course');
        break
    case 'tuesday':
        console.log('Prepare theory');
        break
    case 'wednesday':
    case 'thursday':
        console.log('Write code');
        break
    default:
        console.log('None');
}

// expression / ternary
false && false && !false
const age = 23;
age >= 18 ? console.log('Yay') : console.log('Nah')

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);
const check = age >= 20 ? 'Yay' : 'Nah';
console.log(check);

*/

// JS releases 
// ECMAScript is the standart
// 2009 ES5 is released 
// 2015 ES6 - the biggest update to the language
// ES2016, ES2017, ES2018 etc.
// backword compatible 1997 code works with modern JS engine 2020
// old features are never removed
// ES5 is supported in all browsers, ES6+ supported in modern browsers
