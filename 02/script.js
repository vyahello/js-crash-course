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
*/

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
