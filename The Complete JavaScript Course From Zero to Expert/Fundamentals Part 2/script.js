'use strict'

// NOTE: 函数
// 函数声明，可以先调用，再声明（变量提升）
// const age1 = calcAge1(1998);

// function calcAge1(birthYear) {
//   return 2021 - birthYear;
// }

// // 函数表达式（声明之前不可以调用）
// const calcAge2 = function (birthYear) {
//   return 2021 - birthYear;
// }

// const age2 = calcAge2(1998);

// console.log(age1, age2);

// 使用哪种方式定义函数都行，看个人习惯。

// 箭头函数，其实是一种特殊的函数表达式，更简短
// const calcAge3 = birthYear => 2021 - birthYear;

// const yearsUnitlRetirement = (birthYeah, firstName) => {
//   const age = 2021 - birthYeah;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years.`;
// }

// console.log(yearsUnitlRetirement(1998, 'Peng'));


// SEC Coding Challenge #1

// function calcAverage(score1, score2, score3) {
//   const avgScore = (score1 + score2 + score3) / 3;
//   return avgScore;
// }
// const calcAverage = (a, b, c) => (a + b + c) / 3;

// function checkWinner(avgDolhins, avgKoalas) {
//   if (avgDolhins > avgKoalas) {
//     console.log(`Dolhins win(${avgDolhins} vs. ${avgKoalas})`);
//   } else {
//     console.log(`Koalas win(${avgKoalas} vs. ${avgDolhins})`);
//   }
// }

// const avgDolhins = calcAverage(44, 23, 71);
// const avgKoalas = calcAverage(65, 54, 49);
// checkWinner(avgDolhins, avgKoalas);


// NOTE Array
/*
const friends = ['Mihcael', 'Steve', 'Peter'];
// push()：末尾添加元素，其返回值是新数组的长度
const newLength = friends.push('Jay');
console.log(newLength);

// unshift()：首部添加新元素
friends.unshift('John');
console.log(friends);

// pop：删除最后一个元素，其返回值是删除的元素
const popped = friends.pop();
console.log(popped);

// shift：删除第一个元素

// indexOf：返回元素下标
console.log(friends.indexOf('Steve'));

// includes：是否存在
console.log(friends.includes('Bob'));
friends.push(23);
console.log(friends.includes('23')); // false 注意数据类型

// array的length不是只读的，还可以达到删除最后元素的目的
const colors = ['red', 'blue', 'grey'];
colors.length = 2;
console.log(colors);
*/

// SEC Coding Challenge #2
/*
const bills = [125, 555, 44];

function calcTip(bill) {
  // let tip = 0;
  // ((bill >= 50) && (bill <= 300)) ? tip = bill * 0.15 : tip = bill * 0.2;
  // return tip;
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// 不能直接bills+tips，这样会转换成string再连接起来
*/


// NOTE Object
/*
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2021 - 1998,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steve']
}

// 两张方法取值
console.log(jonas.firstName);
console.log(jonas['lastName']);

// 区别是后一种可以通过运算得来，前一种不行
const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const interestedIn = prompt('What do you want to know? Choose between firstName, lastName, age, job, friends');
if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log('Wrong request! Choose between firstName, lastName, age, job, friends');
}

// 添加属性
jonas.location = 'ChangSha';
jonas['twitter'] = '@jonas';
*/

/*
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYeah: 1998,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steve'],

  // calcAge: function () {
  //   return 2021 - this.birthYeah;
  // }

  // 把需要多次使用的量用变量存起来，就不用先上面那样每次调用都计算了
  calcAge: function () {
    this.age = 2021 - this.birthYeah;
    return this.age;
  }
}

console.log(jonas.calcAge());
// console.log(jonas.calcAge());
// console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.age);
*/

// SEC Coding Challenge #3

/*
const mark = {
  name: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / Math.pow(this.height, 2);
    return this.BMI;
  }
}

const john = {
  name: 'John Smith',
  mass: 92,
  height: 1.95
}
john.calcBMI = mark.calcBMI;

console.log(mark.calcBMI());
console.log(john.calcBMI());
*/


// SEC Coding Challenge #4
/*
const bills = [22, 195, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
}

function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

console.log(calcAverage(tips));
*/