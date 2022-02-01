// Welcome to Part 4 of Javascript Level One!
// It's time to learn how to add some logical capabilities to our JS code.
// You can type these commands into the browser console

// Let's review booleans
true;
false;

////////////////////////////
// Comparison Operators ///
//////////////////////////

// Compare two items and return a boolean
// Pay special attention when we reach equality!

// Greater Than
3 > 2;
2 > 3;

// Less Than
1 < 2;

// Greater than or equal to
2 >= 2;

// Less than or equal to
1 <= 3;

// Let's now discuss equality and it's quirks in Javascript!

// Equality
2 == 2;
"username" == "username";

// Inequality
2 != 3;

// Hold on a second! What happens with this...
"2" == 2;

// It returned True! Although this may cause errors for some programs!

// JS uses type coercion! This means it will try it's best to convert objects
// to similar data types to perform the comparison! A lot of times you don't
// actually want that!

// We want a way to check equality of both value AND type!
// Add another set of equals signs to do this!

// Check equality of value and type
5 === 5;
5 === "5";

// Check for Inequality of value and type
5 !== "5";
5 !== 5;

/// Okay, now let's talk about a few more situations!
// It's common int programming languages for 0 and 1 to be substitutes for
// true and false.
true == 1;
true === 1;

false == 0;
false === 0;

// Weird behaviour for null, undefined, and NaN values!

null == undefined; // true

NaN == NaN; // false

//////////////////////////
// LOGICAL OPERATORS ////
////////////////////////

// Logical Operators allow us to combine multiple comparison Operators!

// AND is written with &&
// Need both conditions to be true to return true
1 === 1 && 2 === 2;

// OR is written with ||
// Need only one condition to be true to return true
1 === 2 || 1 === 1;

// NOT is written with !
// Basically a way of checking the opposite of a condition
!(1 === 1);
// Can also stack these (not super common)
!!(1 === 1);

////////////////////////////////
/// OPTIONAL EXERCISES ////////
//////////////////////////////
// Here are a quick 5 exercise questions for you!
// Mentally evaluate the following expressions, then use the console to check!

var x = 1;
var y = 2;

// Exercise 1
"2" == y && x === 1;

// Exercise 2
x >= 0 || y === "2";

// Exercise 3
!(x !== 1) && y === 1 + 1;

// Exercise 4
y !== "2" && x < 10;

// Exercise 5
y !== x || y == "2" || x === 3;

///////// IF/ELSE
//////////////////////////
/// Control Flow ////////
////////////////////////

// if, else if, else Statements

// Now it is time to finally start learning how we can program some sort of
// logic using JS! Our first step in this learning journey for programming will
//  be simple if, else, and else if statements.

/////////
// IF //
///////

// Here is the syntax for an if statement in JavaScript:
// if (condition){
//     // Execute some code
// }
//
// So what does this actually mean if you've never seen an if statement before?
// It means that we can begin to apply some simple logic to our code. We say if
// some condition is true then execute the code inside of the curly brackets.
// For example, let's say we have two variables, hot and temp. Imagine that hot
// starts off as false and temp is some number in degrees. If the temp is
// greater than 80 than we want to assign hot = true.

// Let's see this in action:
//

var hot = false;
var temp = 60;

if (temp > 80) {
  hot = true;
}
console.log(hot);

// Set temp higher
var temp = 100;

if (temp > 80) {
  hot = true;
}

console.log(hot);

//////////////////////

///////////
// ELSE //
/////////
//
// If we want to execute another block that occurs if the if statement is false,
//  we can use an else statement to do this! It has the syntax:
//
// if (condition) {
//   // Code to execute if true
// } else {
//   // Code to execute if above was not true
// }

temp = 30;

if (temp > 90) {
  console.log("Hot outside!");
} else {
  console.log("Its not too hot today!");
}

///////////////
// ELSE IF ///
/////////////

// What if we wanted more options to print out, rather than just two, the if
// and the else? This is where we can use the else if statement to add multiple
// condition checks, using else at the end to execute code if none of our
// conditions match up with and if or else if.
// Let's see this in action!

temp = 75;
// temp = 30

if (temp > 80) {
  console.log("Hot outside!");
} else if (temp <= 80 && temp >= 50) {
  console.log("Nice outside!");
} else if (temp <= 50 && temp >= 32) {
  console.log("Its cooler outside!");
} else {
  console.log("Its really cold outside!");
}

//////////////////////////////////////////////
// Final Example with Comparison Operators //
////////////////////////////////////////////

// Items sold that day
var ham = 10;
var cheese = 10;

// Report to HQ
var report = "blank";

if (ham >= 10 && cheese >= 10) {
  report = "Strong sales of both items";
} else if (ham === 0 && cheese === 0) {
  report = "Nothing sold!";
} else {
  report = "We had some sales";
}
console.log(report);

///////// While loops ////////

let z = 0;
while (z < 5) {
  console.log("x is currently" + x);

  if (z === 3) {
    console.log("x equals to 3, BREAK");
    break;
  }
  console.log("x is still less than 5, adding 1 to x");

  z++;
}

/////// For loops /////////
for (let i = 0; i < 5; i++) {
  console.log("Number is " + i);
}

let word = "LALAFOOBVA";
for (let i = 0; i < word.length; i++) {
  console.log(word[i]);
}
