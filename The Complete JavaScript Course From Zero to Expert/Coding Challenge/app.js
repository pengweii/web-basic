// SEC Coding Challenge #1
// const markMass = 78;
// const johnMass = 92;
// const markHeight = 1.69;
// const johnHeight = 1.95;

// function BMI(mass, height) {
//   return mass / Math.pow(height, 2);
// }

// const markBMI = BMI(markMass, markHeight);
// const johnBMI = BMI(johnMass, johnHeight);

// const markHigherBMI = markBMI > johnBMI;

// console.log(markBMI);
// console.log(johnBMI);

// console.log(markHigherBMI);



// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Jonas';
// let job = 'teacher';
// const year = 1991;


// Functions
// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// var addExpr = function (a, b) {
//   return a + b;
// }

// var addArrow = (a, b) => a + b;

// if (!numProduct) deletedAllProducts();

// var numProduct = 10;

// function deletedAllProducts() {
//   console.log('All products deleted!');
// }

// var x = 1;
// const y = 2;
// let z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

'use strict'

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2021 - birthYear);
//   console.log(this);
// }
// calcAge(1998);

// const calcArrow = birthYear => {
//   console.log(2021 - birthYear);
//   console.log(this);
// }
// calcArrow(1997);

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