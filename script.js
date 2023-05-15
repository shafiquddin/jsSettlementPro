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
const balanceDate = document.querySelector('.balance__date span');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];
// //slice
// console.log(arr.slice(2));
// console.log(arr.slice(-2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());
// console.log([...arr]);

// //splice

// // console.log(arr.splice(2));
// console.log(arr);
// console.log(arr.splice(-1));
// console.log(arr);
// console.log(arr.splice(2, 3));
// console.log(arr);

// //reverse
// const arr2 = ['f', 'g', 'h', 'i', 'j'];
// console.log(arr2.reverse());
// console.log(arr2);
// //concat
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);
// //Join
// console.log(letters.join('-'));

// const arr = ['a', 'b', 'c', 'd', 'e'];

// console.log(arr.slice(2));
// console.log(arr.slice(-1));
// console.log(arr.slice(2, 4));
// console.log(arr.slice());
// console.log([...arr]);

// // console.log(arr.splice(2));
// console.log(arr.splice(-1));
// console.log(arr);
// console.log(arr.splice(2, 3));
// console.log(arr);

// const arr2 = ['f', 'g', 'h', 'i', 'j'];
// console.log(arr2.reverse());
// console.log(arr2);

// const letter = arr2.concat(arr);
// console.log(letter);
// console.log([...arr2, ...arr]);
// console.log(letter.join('-'));

// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));
// console.log(arr[arr.length - 1]);

// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));
// console.log('shafiq'.at(5));

// for (let [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`${i + 1} You Desposited ${movement}`);
//   } else {
//     console.log(`${i + 1} You withdraw ${Math.abs(movement)}`);
//   }
// }

// console.log('---- ForEach ----');

// movements.forEach((movement, i) => {
//   if (movement > 0) console.log(`${i + 1} You Deposited ${movement}`);
//   else console.log(`${i + 1} You Withdraw ${Math.abs(movement)}`);
// });

//https://bankist.netlify.app/

// currencies.forEach((value, key, map) => console.log(`${key}: ${value}`));

// const currenciesUnique = new Set(['USD', 'EUR', 'EUR', 'GBP', 'USD']);
// console.log(currenciesUnique);

// currenciesUnique.forEach((value, _, map) => console.log(`${value}:${value}`));

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const displayMovement = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}</div>
        </div>
  `;
    containerMovements.insertAdjacentHTML('beforeend', html);
  });
};

const dateFormat = function (newDate) {
  const yyyy = newDate.getFullYear();
  let mm = newDate.getMonth() + 1;
  let dd = newDate.getDate();
  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;
  return dd + '/' + mm + '/' + yyyy;
};

balanceDate.innerHTML = dateFormat(new Date());

// const Julias = [3, 5, 2, 12, 7];
// const Kates = [4, 1, 15, 8, 3];
// const checkDogs = function (Julias, Kates) {
//   const dogJuliasCorrected = Julias.slice();
//   dogJuliasCorrected.splice(0, 1);
//   dogJuliasCorrected.splice(-2);
//   const dogs = dogJuliasCorrected.concat(Kates);
//   dogs.forEach((age, i) => {
//     if (age >= 3) {
//       console.log(`Dog number ${i + 1} is an adult, and is ${age} years old`);
//     } else {
//       console.log(`Dog number ${i + 1} is still a puppy 🐕‍🦺`);
//     }
//   });
// };

// checkDogs(Julias, Kates);
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const max = movements.reduce(
//   (acc, cur) => (acc > cur ? acc : cur),
//   movements[0]
// );
// console.log(max);

// const eurToUSD = 1.1;
// const ConvertEurToUsd = movements.map(mov => (mov * eurToUSD).toFixed(2));
// console.log(ConvertEurToUsd);

// const movementsUsd = [];
// for (let mov of movements) {
//   movementsUsd.push(mov * eurToUSD);
// }
// console.log(movementsUsd);

// const movemenDescrition = movements.map(
//   (mov, i) =>
//     `${i + 1} You ${mov > 0}?deposited ${mov}:Withdraw ${Math.abs(mov)}`
// );

// console.log(movemenDescrition);

const createUserNames = function (accs) {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUserNames(accounts);

// const deposit = movements.filter(mov => mov > 0);
// console.log(deposit);

// const withdraw = [];
// for (let mov of movements) if (mov < 0) withdraw.push(mov);
// console.log(withdraw);

// const balance = movements.reduce((acc, cur) => acc + cur, 0);
// console.log(balance);

// const calcAverageHumanAge = function (ages) {
//   const humanYears = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//   const dog18 = humanYears.filter(age => age >= 18);
//   // const avgAdultDog = dog18.reduce((acc, cur) => acc + cur, 0) / dog18.length;
//   const avgAdultDog =
//     dog18.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
//   return avgAdultDog.toFixed(2);
// };

// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

// const totalDepositUSD = movements
//   .filter(mov => mov > 0)
//   .map(eur => eur * 1.1)
//   .reduce((acc, cur) => acc + cur);
//   console.log(totalDepositUSD);

// calcDisplaySumary(account1.movements);

// const calcAverageHumanAge = function (ages) {
//   const avgAdultDog = ages
//     .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter(age => age >= 18)
//     .reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
//   return avgAdultDog.toFixed(2);
// };

// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

// const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(firstWithdrawal);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

// for (let acc of accounts) {
//   if (acc.owner === 'Jessica Davis') {
//     console.log(acc);
//   }
// }

const displayBalance = function (acc) {
  let interest = acc.movements
    .filter(mov => mov > 0)
    .map(dep => (dep * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, cur) => acc + cur);
  labelSumInterest.innerText = `${interest}\u20AC`;

  let totalDepositEur = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, cur) => acc + cur);
  labelSumIn.innerText = `${totalDepositEur}\u20AC`;

  let totalWithdrawlEur = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, cur) => Math.abs(acc) + Math.abs(cur));
  labelSumOut.innerText = `${Math.abs(totalWithdrawlEur)}\u20AC`;
};

const totalBalance = function (acc) {
  inputLoginUsername.value = inputLoginPin.value = '';
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}\u20AC`;
};

const updateUI = function (acc) {
  displayBalance(acc);
  displayMovement(acc.movements);
  totalBalance(acc);
};

let currentAccount;

btnLogin.addEventListener('click', e => {
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    inputCloseUsername.value = inputClosePin.value = '';
    inputLoginPin.blur();
    updateUI(currentAccount);
  }
});

// btnSort.addEventListener('click', e => {
//   e.preventDefault();
//   console.log(currentAccount.movements);
//   currentAccount.movements = currentAccount.movements.sort((a, b) => b - a);
//   calcDisplaySumary(currentAccount.movements);
//   console.log(currentAccount.movements);
// });

btnTransfer.addEventListener('click', e => {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const reciever = accounts.find(acc => acc.username === inputTransferTo.value);
  if (
    amount > 0 &&
    reciever &&
    currentAccount.balance >= amount &&
    reciever?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    reciever.movements.push(amount);
    updateUI(currentAccount);
  }
});
