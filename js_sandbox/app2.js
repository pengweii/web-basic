/* --- Math --- */

// const num1 = 100;
// const num2 = 50;
// let val;

// // Math Object
// val = Math.PI;
// val = Math.E;
// val = Math.round(1.8);
// val = Math.ceil(2.2);
// val = Math.sqrt(16);
// val = Math.abs(-3);
// val = Math.pow(2,3);
// val = Math.min(2,5,-1);
// val = Math.random();
// val = Math.floor(Math.random()*100 + 1);

// console.log(val);


/* --- String Methods & Concatenation ---*/

// const firstName = 'Bob';
// const lastName = 'Johnson';

// let val;
//  val = firstName + lastName;

// // Concatenation
// val = firstName + ' ' + lastName;

// // Append
// val = 'Brad ';
// val += 'Traversy';

// // Escaping
// val = "This's my \"suit\".";

// // Length
// val = firstName.length;

// // Concat
// val = firstName.concat(' ', lastName);

// // Change case
// val = firstName.toUpperCase();

// val = firstName[1];

// // indexOf()
// val = lastName.indexOf('n');
// val = lastName.lastIndexOf('n');

// // charAt()
// val = lastName.charAt('3');
// // get last char
// val = lastName.charAt(lastName.length - 1);

// // substring()
// val = lastName.substring(0,4);

// // slice()
// val = lastName.slice(-4);

// // split()
// str = 'Hello there my name is William.';
// tags = 'web design, develope, front end, back end';
// val = str.split(' ');
// val = tags.split(',');

// // raplace()
// val = str.replace('William', 'Jack');

// // includes()
// val = str.includes('there');

// console.log(val);


//===
//=== Template Literals
//===

// const name = 'John';
// const age = 32;
// const job = 'Web Developer';
// const city = 'ChangSha';

// // Without template strings(ES5)
// html = '<ul>' +
//         '<li>Name: ' + name + '</li>' +
//         '<li>Age: ' + age + '</li>' +
//         '<li>Job: ' + job + '</li>' +
//         '<li>City: ' + city + '</li>' +
//         '</ul>';

// function hello(){
//     return 'hello';
// }

// // With template strings(ES6)
// html = `
//     <ul>
//         <li>Name: ${name}</li>
//         <li>Age: ${age}</li>
//         <li>Job: ${job}</li>
//         <li>City: ${city}</li>
//         <li>${2 + 2}</li>
//         <li>${hello}</li>
//         <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
//     </ul>
// `

// document.body.innerHTML = html;


//===
//=== Arrays
//===

// const numbers = [1,2,3,4,5];
// const numbers2 = new Array(11,22,33,44,55);
// const fruit = ['Apple','Banana','Orange'];
// const mixed = [22,'Hello','true','undefined','null',{a:1, b:1}, new Date()];

// val = numbers.length;
// // Check if is array
// val = Array.isArray(numbers);

// val = numbers[3];

// // Insert into array
// numbers[2] = 100;
// // Find index of value
// val = numbers.indexOf(4);

// Mutating arrays
// // Add on to end
// numbers.push(250);
// // Add on to front
// numbers.unshift(150);
// // Take off from end
// numbers.pop();
// // Take off from front
// numbers.shift();
// // Splice values
// numbers.splice(1,1);
// // Reverse
// numbers.reverse();

// // Concatenate array
// val = numbers.concat(numbers2);
// // Sort
// val = fruit.sort();
// val = numbers.sort(); //此方法默认只按第一个数字排序

// // 整体排序
// val = numbers.sort(function(x,y){
//     return x - y;
// });

// // Find 找出第一个满足条件的
// function under3(num){
//     return num < 50;
// };
// val = numbers.find(under3);

// console.log(numbers);
// console.log(val);


//===
//=== Object Literals
//===

// const person = {
//     firstName: 'Steve',
//     lastName: 'Smith',
//     age: 30,
//     email: 'steve@gmail.com',
//     hobbies: ['music', 'sports'],
//     address: {
//         city: 'Miami',
//         state: 'FL',
//     },
//     getBirthday: function(){
//         return 2021 - this.age;
//     }
// }

// let val;

// val = person;
// // Get specific value
// val = person.firstName;
// val = person['lastName'];
// val = person.hobbies[1];
// val = person.address.city;
// val = person.getBirthday();

// console.log(val);

// const people = [
//     {name: 'John', age: 30},
//     {name: 'Mike', age:24},
// ];

// for(let i = 0; i < people.length; i++){
//     console.log(people[i].name);
// }


//===
//=== Date
//===

let val;
const today = new Date();
let birthday = new Date('5-9-1998');
birthday = new Date('May 9 1998');
birthday = new Date('5/9/1998');

val = today.getMonth();
val = today.getDate();
val = today.getDay(); //星期
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getTime(); //时间戳，距离1970过去的毫秒数

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1999);
birthday.setHours(13);
birthday.setSeconds(25);


console.log(birthday);
