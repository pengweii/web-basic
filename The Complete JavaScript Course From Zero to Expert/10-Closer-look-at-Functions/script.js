'use strict';

/*

const bookings = [];

function createBooking(
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5 默认值
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    // flightNum: flightNum;
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
}

createBooking('LH123', 2);
createBooking('LH123', undefined, 100); // 跳过某个值不能和array一样空着，要设为undefined

const flight = 'LH234';
const jonas = {
  name: 'Jonas Michael',
  passport: 11999,
};

function checkIn(flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 11999) {
    alert('Checked in');
  } else {
    alert('Wrong passport');
  }
}

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);



// 传参 same as doing：
const flightNum = flight;
const passenger = jonas;

*/

/* flight是primitive，jonas是reference，所以flight不受影响，而jonas被修改的，
因为jonas只是复制了memory heap中的内容，和原内容指向的是同一个对象。*/

/* 在有些语言(如C和C++)中有按值传递(passing by values)和引用传递(passing by reference)，
但是js中只有按值传递，即使传递的是一个object，也是一个值，只不过这个值是对象的地址 */

/*
///////////////////
// 返回函数的函数

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeter = greet('Hey');
greeter('Jonas');
greet('Hello')('Mike');

// Challenge: transform to arrow function
// const greetArrow = greeting => {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
const greetArrow = greeting => name => console.log(`${greeting} ${name}`);

greetArrow('Hi')('Peng');
*/

/*
//////////////////
// NOTE call方法
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function(){}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas');
lufthansa.book(324, 'Michael');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Dose not work
// book('567', 'Sara');

// call方法可以指定this，第一个参数为this的指向对象，后面为函数的参数列表
book.call(eurowings, 567, 'Sara');
// apply与call的区别是后面传的是一个array，而不是参数列表
const flightData = [555, 'Peng'];
book.apply(eurowings, flightData);
// ES6一般不适用apply，遇到array可以直接解构数组
book.apply(eurowings, ...[flightData]);
console.log(eurowings);

// NOTE bind方法 -- 不是像call一样立即调用，而是返回一个函数，可以重复使用
const bookEW = book.bind(eurowings);
bookEW(444, 'Wei');
// 还可以部分应用参数
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Cooper');

// 在DOM中的应用
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  this.planes++;
  console.log(this.planes);
};
// this指向的是buy按钮，因此会返回NaN
// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane);
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => (value += value * rate);
console.log(addTax(0.1, 100));

// 使用部分参数应用可以从一个通用函数中创建一个具体函数，和函数默认值不一样
const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));

*/

// Coding Challenge #1

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),

  displayResults(type) {
    if (type === 'string') {
      console.log(
        `Poll results are ${this.answers[0]}, ${this.answers[1]}, ${this.answers[2]}, ${this.answers[3]},`
      );
    } else if (type === 'array') {
      console.log(this.answers);
    } else {
      console.log('Wrong type!');
    }
  },

  registerNerAnswer() {
    const answerStr = prompt(
      'What is your favorite programming language?\n0:JavaScript\n1:Python\n2:Rust\n3:C++'
    );
    const answer = Number(answerStr);
    if (answer >= 0 && answer <= 3) {
      this.answers[answer]++;
    } else {
      alert('Please input correct number');
    }
    // console.log(answer);
    // console.log(this.answers);
    this.displayResults();
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNerAnswer.bind(poll));
