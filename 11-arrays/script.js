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

// chain methods
const eurUsd = 1.1;
const total = movements
  .filter(move => move > 0)
  .map(move => move * eurUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(total);

const calcDisplaySummary = function (movements) {
  const incomes = movements
    .filter(mov => mov > 0)
    .reduce((acc, move) => acc + move, 0);
  labelSumIn.textContent = `${incomes}€`;

  const outcomes = movements
    .filter(mov => mov < 0)
    .reduce((acc, move) => acc + move, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;

  const interest = movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * 1.2) / 100)
    .filter((int, i, arr) => int >= 1)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumInterest.textContent = `${interest}€`;
};
calcDisplaySummary(account1.movements);

// Find - return el from array based on condition
// uses callback func
const firstWithDraw = movements.find(mov => mov < 0); // find only one element
console.log(firstWithDraw);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  console.log(e);
  const amout = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  if (amout > 0 && receiverAcc?.username) {
    console.log('Transfer valid');
  }
});

// findIndex method
// btnClose.addEventListener('click', function (e) {
//   e.preventDefault();
//   console.log('Delete');
// });
const val = [1, 100, 200, 2];
const idx = val.findIndex(el => el == 200); // 2, more complex than .indexOf(), uses callback func
console.log(idx);
console.log(val.indexOf(200));

// some and every method
// SOME
console.log(movements.includes(-130));
const anyDep = movements.some(mov => mov > 0); // if more than 1 dep, something above 0, same as .includes but uses condition
console.log(anyDep);

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  console.log(amount);
});

// EVERY - of all elements in an array safisfied the condition
console.log(movements.every(mov => mov > 0));

// Saparate callback
const dep = mov => mov > 0;
console.log(movements.some(dep));
console.log(movements.every(dep));
console.log(movements.filter(dep));

// flat and flatMap
const arr = [[1, 2, 3], [4, 5, 6], 7, 8]; // [1, 2, 3, 4, 5, 6, 7, 8], goes onlt 1 level deep

const arrDeep = [
  [1, [2, 3]],
  [4, [5, [6]]],
  [7, [8]],
];
console.log(arrDeep.flat(3)); // 3 level deep

const accountMovements = accounts.map(acc => acc.movements); // [[..], [..], ...]
console.log(accountMovements);
const allMove = accountMovements.flat();
console.log(allMove);
console.log(allMove.reduce((acc, el) => acc + el, 0));

// flatMap
const overallBal = accounts
  .flatMap(acc => acc.movements) // replase map + flat, goes only 1 level deep
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBal);


// Sorting - sort string by default, can pass callback func
const owners = ['John', 'Zach', 'Adam'];
console.log(owners.sort()); // return value and change parent object, sort strings
console.log(owners);

console.log(movements);
console.log(movements.sort());

// Asc
movements.sort((a, b) => {
  if (a > b) return 1;
  if (b > a) return -1;
});
console.log(movements);

// the same
movements.sort((a, b) => a - b);
console.log(movements);

// Desc
movements.sort((a, b) => {
  if (a > b) return -1;
  if (b > a) return 1;
});
console.log(movements);

// Fill Arrays
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4));
const x = new Array(7); // [empty × 7]
// x.fill(1);
// console.log(x);
x.fill(1, 3, 5);
console.log(x);

arr.fill(23, 4, 6); // fill with 23 from 4-6 index
console.log(arr);

// Array.from
const newArr = Array.from({ length: 7 }, () => 1);
console.log(newArr);

const z = Array.from({ length: 7 }, (_, idx) => idx + 1);
console.log(z);

const zz = Array.from({ length: 100 }, () => Math.trunc(Math.random() * 6));
console.log(zz);

labelBalance.addEventListener('click', function () {
  const moveUI = Array.from(document.querySelector('.movements__value'), el =>
    Number(el.textContent.replace('€', ''))
  );
  console.log(moveUI);
});
*/

const bandDep = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);
console.log(bandDep);

// const numDep1000 = accounts.flatMap(acc =>
//   acc.movements.filter(mov => mov > 100)
// ).length;
// console.log(numDep1000);
const numDep1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur > 1000 ? count + 1 : count), 0);
console.log(numDep1000);

let a = 10;
console.log(a++); // return 10
console.log(a); // return 11

const sums = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      //   cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(sums);

const convertTitle = function (title) {
  const exp = ['a', 'an', 'the', 'but', 'or'];
  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word =>
      exp.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(' ');
  return titleCase;
};
console.log(convertTitle('this is a nice'));
