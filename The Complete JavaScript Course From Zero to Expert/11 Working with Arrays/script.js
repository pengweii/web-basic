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

function displayMovements(movements, sort = false) {
  // textContents只返回text内容，而innerHTML返回所有的东西，包括html标签等
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov} €</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
}
// displayMovements(account1.movements);

function createUsernames(accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
}
createUsernames(accounts);

function calcDisplayBalance(acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} €`;
}

function calcDisplaySummary(acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes} €`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)} €`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest} €`;
}

function updateUI(acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
}

// Event hander
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  // chaining
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear the inputs
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur(); //清除焦点

    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // console.log('Transger valid');
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    // indexOf()只能找到数组中的某个值的索引，而findIndex()可以支持更复杂的条件查询
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();

  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////

/*
// NOTE Simple array methods
let arr = ['a', 'b', 'c', 'd', 'e'];

// slice() 不改变原数组
// 可以用来创建浅拷贝
console.log(arr.slice());
// same as:
console.log([...arr]);

// splice() 改变原数组，原数组变为剪剩下的，通常可用于删除最后一个元素
console.log(arr.splice(-1)); // [e]
console.log(arr); // [a, b, c, d]
// 还有一个和slice()不同的地方就是splice()接受的第二个参数是删除元素的个数
console.log(arr.splice(1, 2)); // [b, c]
console.log(arr); // [a, d]

// reverse() 改变原数组
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// concat() 不改变原数组
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// join() 不改变原数组
console.log(letters.join('-'));

*/

/*
// NOTE forEach
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log('---- for-of ----');
// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log('---- forEach ----');
// forEach传入匿名函数的值分别为当前元素、索引值、整个数组
// CAUTION break和continue在forEach中无效！
movements.forEach(function (movement, i, arr) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
});
// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...
*/

/*
// map和set中也可以用forEach
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR']);
currenciesUnique.forEach(function (value, _, set) {
  console.log(`${value}`);
});
*/

/*
// SEC Coding Challenge #1
const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

function checkDogs(arr1, arr2) {
  const arr1Copy = arr1.splice();
  arr1Copy.splice(0, 1);
  arr1Copy.splice(-2);
  const juliaDogs = [...arr1Copy];
  const kateDogs = [...arr2];
  juliaDogs.forEach(function (age, i) {
    const message =
      age >= 3
        ? `Dog number ${i + 1} is an adult, and is ${age} years old`
        : `Dog number ${i + 1} is still a puppy 🐶`;
    console.log(message);
  });
  kateDogs.forEach(function (age, i) {
    const message =
      age >= 3
        ? `Dog number ${i + 1} is an adult, and is ${age} years old`
        : `Dog number ${i + 1} is still a puppy 🐶`;
    console.log(message);
  });
}

// checkDogs(dogsJulia, dogsKate);

// Coding Challenge #2
function calcAverageHumanAge(ages) {
  // 1.
  const humanAge = ages.map(function (age) {
    if (age <= 2) {
      return 2 * age;
    } else {
      return 16 + 4 * age;
    }
  });
  console.log(humanAge);

  // 2.
  // const adultDogs = humanAge.filter(function (age) {
  //   return age >= 18;
  // });
  const adultDogs = humanAge.filter(age => age >= 18);
  console.log(adultDogs);

  // 3.
  const avgAge =
    adultDogs.reduce(function (acc, age) {
      return acc + age;
    }, 0) / adultDogs.length;
  console.log(avgAge);
}
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

// Coding Challenge #3 ❌
const calcAverageArrow = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + 4 * age))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
console.log(calcAverageArrow([5, 2, 4, 1, 15, 8, 3]));
*/

// SEC Practice
// 1. 略

// 2.
// 超过1000元的人数
// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;

const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0);

// CAUTION 注意：上面的count+1不可以写成count++，但是可以写成++count
// a++除了将a+1，还会返回原来的a
let a = 10;
console.log(a++); // 10
console.log(a); // 11

// 3.
// reduce方法的累加值不只可以是数组，还可以是其他类型的，比如object
// const sums = accounts
const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return sums; // 箭头函数有花括号时一定要显式返回
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(deposits, withdrawals);

// 4. Convert title case
// this is a nice title => This Is a Nice Title
function convertTitleCase(title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);

  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');

  return capitalize(titleCase); // 确保第一个单词即使在exceptions中也要首字母大写
}

console.log(convertTitleCase('this is a LONG title but not too long'));

// SEC Coding Challenge #4
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1.
dogs.forEach(function (dog) {
  dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
  console.log(dog.recommendedFood);
});

// 2.
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(
  `Sarah's dog is eating too ${
    dogSarah.curFood > dogSarah.recommendedFood * 1.1 ? 'much' : 'little'
  }`
);

// 3.
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommendedFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);

// 4.
// console.log(
//   `${ownersEatTooMuch[0]} and ${ownersEatTooMuch[1]} and ${
//     ownersEatTooMuch[2] + "'s dogs eat too much!"
//   }`
// );
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);

// 5.
const exactFood = dogs.some(dog => dog.curFood === dog.recommendedFood);
console.log(exactFood);

// 6.
const okayFood = dogs.some(
  dog =>
    dog.curFood <= dog.recommendedFood * 1.1 &&
    dog.curFood >= dog.recommendedFood * 0.9
);
console.log(okayFood);

// 7.
const okayFoodDogs = dogs.filter(
  dog =>
    dog.curFood <= dog.recommendedFood * 1.1 &&
    dog.curFood >= dog.recommendedFood * 0.9
);
console.log(okayFoodDogs);

// 8.
const dogsCopy = dogs.slice();
dogsCopy.sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogsCopy);

/*
// NOTE map()
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;
const movementsUSD = movements.map(function (mov, i) {
  return mov * eurToUsd;
});
// const movementsArrow = movements.map(mov => mov * eurToUsd);

// console.log(movements);
// console.log(movementsUSD);
// console.log(movementsArrow);

// filter()
const deposits = movements.filter(function (mov) {
  return mov > 0; // 布尔表达式即可
});
const withdrawals = movements.filter(mov => mov < 0);
// console.log(deposits);
// console.log(withdrawals);

// reduce() 回调函数中第一个参数不是当前元素，而是累加器；reduce()中第二个参数是acc的初始值，默认为0
const balance = movements.reduce(function (acc, mov, i, arr) {
  return acc + mov;
}, 0);
// console.log(balance);

// 计算最大值，初始值一定不要用默认的0，要用第一个元素
const max = movements.reduce((acc, mov) => {
  return acc > mov ? acc : mov;
}, movements[0]);
// console.log(max);

// chain application 应该避免那些会修改原数组的方法，如splice和reverse
const totalDeposits = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);

// NOTE find()  与filter不同的是：1. find只返回满足条件的第一个元素； 2. find返回的是一个元素，filter是数组
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(firstWithdrawal);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

// NOTE some()、every()
// indludes()只能检查是否相等
console.log(movements.includes(-130));

// some()支持更复杂的查询
const anyDeposits = movements.some(mov => mov > 1500);
console.log(anyDeposits);

// every() 所有元素都要满足条件
console.log(account4.movements.every(mov => mov > 0));

// Seperate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

// NOTE flat()、flatMap()
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// flat()默认只展开一层
console.log(arrDeep.flat());
console.log(arrDeep.flat(2));

// flatMap()
// 像下面这种先用map映射再展开的操作非常常见
const overalBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);

// flatMap就是把两个操作结合了一下
const overalBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance2);

// NOTE sort() 会改变原数组！
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());

// 默认会按字符串的方式排序，也就是一个字符一个字符比较！
console.log(movements.sort()); //[-130, -400, -650, 1300, 200, 3000, 450, 70]

// return < 0, a, b 保持顺序
// return > 0, b, a 交换顺序
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
movements.sort((a, b) => a - b);
console.log(movements);


// NOTE 其他方式创建array
// empty + fill
// 当参数只有一个数字的时候，创建的array是以这个数字为长度的空数组
const x = new Array(7); // [empty × 7]
// 这个空数组只能调用fill方法
x.fill(1, 3, 5); // 索引3、4填上1

// Array.from()
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (cur, i) => i + 1);
console.log(z);

// 使用querySelectorAll()返回的是nodelist而非array，没有map等方法，使用Array.from()
// 可以很方便的将nodelist转化为array
labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(movementsUI);

  // 也可以用展开运算符，但是那样就不方便chaining
  const movementsUI2 = [...document.querySelectorAll('.movements__value')];
});
*/
