const printForecast = function (arr) {
  let s = '';
  for (let i = 0; i < arr.length; i++) {
    s += `... ${arr[i]} in ${i + 1} days `;
  }
  s += '...';
  return s;
};

console.log(printForecast([17, 21, 23]));
