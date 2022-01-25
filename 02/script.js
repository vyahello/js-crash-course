'use strict'; // activate string mode, should be very first line

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive');

// functions
function logger() {
    console.log('My name is Jonas')
}
logger();
logger(10); // param will not get effect


function processor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`
    return juice;
}
const juice = processor(11, 10);
console.log(juice);
Number('23'); // also function


// func declaration
const age1 = calcAge1(1991); // declared before usage, cannot do with anonimous func

function calcAge1(birth) {
    const age = 2037 - birth;
    return age;
}
console.log(age1);

// func expression
const calcAge2 = function (birth) {  // anonimous func
    const age = 2037 - birth;
    return age;
}
console.log(calcAge2(1991));


// arrow functions
// shorter and faster to write
const calcAge3 = birthYear => 2037 - birthYear; // param and code block
console.log(calcAge3(1991));


const unit = birthYear => {
    const age = 2037 - birthYear;
    const retire = 65 - age;
    return retire
}
console.log(unit(1991));


const retire = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retire = 65 - age;
    return `${firstName} retires at ${retire}`
}
console.log(retire(1991, 'Jake'));


function cutFruitPieces(fruit) {
    return fruit * 4;
}

function processor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePiences = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} apples and ${orangePiences} oranges`
    return juice;
}
console.log(processor(2, 3));

const calcAge = function (birth) {
    return 2037 - birth;
}

const retire = (birth, firstName) => {
    const age = 2037 - birth;
    const retire = 65 - age;

    if (retire > 0) {
        return retire;
    }
    else {
        return -1
    }

    return `${firstName} retires at ${retire}`
}
console.log(retire(1991, 'Jake'));
console.log(retire(1950, 'Luke'));

// Arrays - data structure
const friends = ['Mike', 'Sam', 'Peter'];
const years = new Array(1991, 1992, 1993); // array func
console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length - 1]); // get last value

friends[2] = 'Jay';
console.log(friends);

const jonas = ['Jonas', 'Shmed', 20, friends];
console.log(jonas);

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const y = [1990, 1967]
console.log(calcAge(y)); // NaN
console.log(y + 10); // 1990,196710
console.log(calcAge(y[0])); // 47
console.log(jonas[5]); // undefined

// array methods
const l = new Array(10, 11, 20); //
typeof l; // object
const friends = ['Mike', 'Sam', 'Peter'];
const newLength = friends.push('Jay');
console.log(newLength); // 4
friends.unshift('John'); // add to the beginning
console.log(friends);

const popped = friends.pop(); // remove last element
console.log(popped);
console.log(friends);
friends.shift(); // remove first element
console.log(friends);
console.log(friends.indexOf('Mike')); // index of element - 0
console.log(friends.includes('Mike')); // has 'Mike' in an array -> true
*/

// objects - to group together different vars
// difference between array is that the order does not matter
const jonas = {
    firstName: 'Jonas',
    lastName: 'Shmed',
    age: 31,
    job: 'teacher',
    friends: ['Mike', 'Luke']
}
console.log(jonas);
console.log(jonas.firstName);
console.log(jonas['firstName']); // same
const nameKey = 'Name'
console.log(jonas['first' + nameKey]); // same

const interestedIn = prompt('What do you want to know about Jonas?')
console.log(jonas[interestedIn]);

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
}
else {
    console.log('Wrong request')
}
jonas.location = 'Portugal'; // add key to the object
jonas['twitter'] = 'lala';
console.log(jonas);

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, best one is ${jonas.friends[0]}`)

