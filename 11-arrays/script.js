'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const displayMovements = function (move) {
  containerMovements.innerHTML = '';

  move.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
          <div class="movements__row">
            <div class="movements__type movements__type--${type}">${i + 1}</div>
            <div class="movements__value">${mov}</div>
          </div>
          `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} EUR`;
};

const createUsernames = function (accounts) {
  accounts.forEach(function (acc) {
    acc.username = acc.owner // creates username, dont return anything, do some work without reutrning anything
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts);
displayMovements(account1.movements);
// console.log(containerMovements.innerHTML); // html that we created
calcDisplayBalance(account1.movements);

const max = movements.reduce((acc, mov) => {
  if (acc > mov) {
    return acc;
  } else {
    return mov;
  }
}, movements[0]);
console.log(max);

/////////////////////////////////////////////////
/*
let arr = ['a', 'b', 'c', 'd'];
console.log(arr.slice(2)); // from 2nd idx
console.log(arr.slice(2, 4)); // from 2 - 4 idx
console.log(arr.slice(-2)); // from 2nd idx last
console.log(arr.slice(1, -2)); // from 1 except last 2 idx
console.log(...arr);

// SPLICE - change original array
console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);

// Reverse
const arr2 = ['j', 'i', 'm'];
console.log(arr2.reverse());
console.log(arr2); // reversed too

// Concat - add arrays, does not mutate
const letters = arr.concat(arr2);
console.log(letters);
// or
console.log([...arr, ...arr2]);

// Join
console.log(letters.join('-'));

// At method - 2022
const a = [22, 11, 94];
console.log(a[0]);
console.log(arr.at(0)); // value at posit 0

// last value
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1)); // works with string also

// forEach - calls callback func, loop over array and on each iter calls callback func
// you cannot break/continue forEach
movements.forEach(function (el, idx, ar) {
  if (el > 0) {
    console.log(`Positive at ${idx} pos`);
  } else {
    console.log(`Negative ${Math.abs(el)} at ${idx} pos`);
  }
});

currencies.forEach(function (value, key, map) {
  // map
  console.log(`${key}: ${value}`);
});

const uniq = new Set(['USD', 'GBP', 'USD']);
console.log(uniq);
uniq.forEach(function (v, k, s) {
  // set, here key == value, set does have keys
  console.log(`${v}: ${v}`);
});


// MAP & FILTER & REDUCE - array methods
// MAP - as forEach but creates new array
// FILTER - filter elements in array - return new array
// REDUCE - boils all array elements into single value

// MAP
const eurToUsd = 2;
const movementsUSD = movements.map(function (mov) {
  return mov * eurToUsd;
});
console.log(movementsUSD);
const movementsUSD2 = movements.map(mov => mov * eurToUsd);
console.log(movementsUSD2);

const moveDesc = movements.map(
  (mov, i, arr) =>
    `Move ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdraw'} ${Math.abs(mov)}`
);
console.log(moveDesc);

const user = 'Steve Thom Will';
const createUsernames = function (accounts) {
  accounts.forEach(function (acc) {
    acc.username = acc.owner // creates username, dont return anything, do some work without reutrning anything
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
console.log(createUsernames(accounts));
console.log(accounts);

// FILTER
// used also callback
console.log(
  movements.filter(function (el, i, arr) {
    return el > 0;
  })
);

// the same result
const dep = [];
for (const mov of movements) if (mov > 0) dep.push(mov);
console.log(dep);

const withDrawal = movements.filter(mov => mov < 0);
console.log(withDrawal);

// REDUCE
const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
}, 0);
console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);
*/
