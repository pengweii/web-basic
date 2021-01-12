// Log to console

// console.log('Hello World');
// console.log(123);
// var greeting = 'Hello';
// console.log(greeting);
// console.log([1,2,3,4]);
// console.log({a:1, b:2});
// console.table({a:1, b:2});

// console.error('This is some error');
// //console.clear();
// console.warn('This is a warning');

// console.time('Hello');
//     console.log('Hello World');
//     console.log('Hello World');
//     console.log('Hello World');
//     console.log('Hello World');
//     console.log('Hello World');
//     console.log('Hello World');
// console.timeEnd('Hello')


//var, let, const

// var name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// const
// 不能重新赋值，且必须在声明时赋值
// const name = 'John';
// console.log(name);

// const的这些限制只适用于它指向的变量的引用，若引用的是一个对象，修改这个对象内部的属性是可以的
// const person={
//     name: 'John',
//     age: 30
// }

// person.name = 'Sara';
// // console.log(person);

// const numbers = [1,2,3,4,5];
// numbers.push(6);
// console.log(numbers);


// PRIMITIVE

// // String
// const name = 'John Doe';
// // Number
// const age = 45;
// // Boolean
// const hasKids = true;
// // Null
// const car = null;
// // Undefined
// let test;
// // Symbol
// const sym = Symbol();


// REFERENCE TYPES - Objects

// // Array
// const hobbies = ['movies', 'music'];
// // Object literal
// const address = {
//     city: 'ChangSha',
//     state: 'MA'
// }
// const today = new Date();

// console.log(today);
// console.log(typeof address);


/* ---  Type Conversion  --- */
let val;
// val = String([1,2,3]);
// val = ([1,2,3]).toString();
val = Number('5');
val = parseInt('100.3');
val = parseFloat('100.30');

// console.log(val);
// console.log(typeof val);
// // console.log(val.length);
// console.log(val.toFixed(2));

const val1 = String(5);
const val2 = 6;
const sum = val1 + val2;

console.log(sum);
console.log(typeof sum);

