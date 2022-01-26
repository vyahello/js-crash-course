'use sctrict';

/*
// install 'prettier', 'todo highlight', 'settings sync', 'image preview'
// docs - https://prettier.io/docs/en/options.html
// TODO
const x = 25;
const calcAge = birth => 2037 - birth;

console.log(x);

// reload browser by default
// install live server
// install vs code ext + node js and npm extension

// node.js - run js code out of browser
// running js code on server side
// npm install live-server
// run live-server in cli

// issues
const temps = [3, -2, -6, -1, 'error', 9, 13, 17, 15];
console.log(temps);

// 1) understand the problem
// how to compute max and min temps?

// 2) breaking up into sub-problems
// - How to ignore erorrs?
// - Find max value in temp array
// - Subtract min from max and return it

// or let mx = Math.max(...array);

const calcTempAmplitude = function (t1, t2) {
  const array = t1.concat(t2);
  console.log(temps);

  let max = array[0];
  let min = array[0];

  for (let i = 0; i < array.length; i++) {
    const curTemp = array[i];
    if (typeof curTemp !== 'number') continue;
    if (array[i] > max) {
      max = array[i];
    }
    if (array[i] < min) {
      min = array[i];
    }
  }
  console.log(max, min);
  return max - min;
};
const ampl = calcTempAmplitude([3, 5, 1], [9, 0, 5]);
console.log(ampl);

// merge arrays - search in MDN web page, official js docs
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr3);
*/

// debugging
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: 11,
  };
  debugger;
  const kelvin = measurement.value + 273;
  return kelvin;
};
console.log(measureKelvin());

// in browser - go to 'sources', set the breakpoint, click step btn to continue
