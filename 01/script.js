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
*/

// types 
const year = '1991';
// console.log(year + 18); // 199118
console.log(Number(year) + 18);

