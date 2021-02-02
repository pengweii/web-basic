'use strict';

/* NOTE var可以先使用再定义，不安全，let和const不可以
console.log(me);
console.log(job);
console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;
*/

//NOTE Functions
/*
console.log(addDecl(2, 3));
console.log(addExpr(2, 3));
console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

var addExpr = function (a, b) {
  return a + b;
}

var addArrow = (a, b) => a + b;

if (!numProduct) deletedAllProducts();

var numProduct = 10;

function deletedAllProducts() {
  console.log('All products deleted!');
}

var x = 1;
const y = 2;
let z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
*/

// NOTE this关键字
/*
console.log(this);

const calcAge = function (birthYear) {
  console.log(2021 - birthYear);
  console.log(this);
}
calcAge(1998);

const calcArrow = birthYear => {
  console.log(2021 - birthYear);
  console.log(this);
}
calcArrow(1997);

const jonas = {
  year: 1998,
  calcAge: function () {
    console.log(this);
    console.log(2021 - this.year);
  }
}
jonas.calcAge();

const matila = {
  year: 2000,
}
matila.calcAge = jonas.calcAge;
matila.calcAge();
*/

// NOTE 普通函数和箭头函数区别
/*
const jonas = {
  firstName: 'Jonas',
  year: 1998,
  calcAge: function () {
    console.log(this);
    console.log(2021 - this.year);
  },

  greet: () => console.log(`Hey, ${this.firstName}`)
};

jonas.greet(); // Hey, undefined
// 箭头函数没有自己的this，所以里面的this是其父环境的this -> window
// CAUTION 不是Jonas！因为const jonas的花括号里不是一个block，而是一个对象的定义
// window没有firstName，因此为undefined。但是若是用var声明的firstName，
// 则会在window下创建一个firstName属性，所以不要用var！！！
*/

/*
const jonas = {
  firstName: 'Jonas',
  year: 1998,
  calcAge: function () {
    // console.log(this);
    console.log(2021 - this.year);

    // 方法里的函数和在方法外的函数一样，this为undefined
    // const isMillenial = function () {
    //   console.log(this);
    //   console.log(this.year >= 1981 && this.year <= 1996);
    // };

    // 解决方法1 (pre ES6)
    // const self = this;
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // 解决方法2 箭头函数，因为箭头函数没有自己的this，因此this就为上一级的
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },

  greet: () => console.log(`Hey, ${this.firstName}`)
};
*/
// jonas.calcAge();

// NOTE arguments关键字
// 普通函数有arguments关键字，可以接受超过的变量。但是现在有更好的方法来处理
/*
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
}
addExpr(2, 5);
addExpr(2, 5, 8, 9);

// 箭头函数没有arguments关键字
var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5);
*/

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27
};

const marriedJessica = jessica;
marriedJessica.lastName = 'John';

// console.log('Before married: ', jessica); // John
// console.log('After married: ', marriedJessica); // John

// 复制objects，assign是浅拷贝，只会拷贝第一层，若object里面还有object(如array)，
// 则会和前面的方法一样，执行同一个内存区域
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob']
};
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'John';
jessicaCopy.family.push('Mary');
console.log('Before married: ', jessica2);
console.log('After married: ', jessicaCopy);