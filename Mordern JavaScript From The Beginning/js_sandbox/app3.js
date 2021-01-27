//===
//=== If statements & Comparison operators
//===

// const id = '100';

// if(id == 100){  // js中字符串和数字比较不会报错
//     console.log('correct');
// } else {
//     console.log('incorrect');
// }

// // 更推荐
// if(id === 100){  // 这样就会报错了
//     console.log('correct');
// } else {
//     console.log('incorrect');
// }

// 测试一个变量是否被定义
// 不能用if(id)，如果未定义会报错
// if(typeof id !== 'undefined'){
//     console.log(`The id is ${id}`); //注意模板是`而不是'
// } else {
//     console.log('No id');
// }


// SWITCH
// const color = 'blue';

// switch(color){
//     case 'red':
//         console.log('Color is red');
//         break;
//     case 'blue':
//         console.log('Color is blue');
//         break;
//     default:
//         console.log('Color is not red or blue');
//         break;
// }

// switch(new Date().getDay()){
//     case 0:
//         day = 'Sunday';
//         break;
//     case 1:
//         day = 'Monday';
//         break;
//     case 2:
//         day = 'Tuesday';
//         break;
//     case 3:
//         day = 'Wednesday';
//         break;
//     case 4:
//         day = 'Thusday';
//         break;
//     case 5:
//         day = 'Friday';
//         break;
//     case 6:
//         day = 'Saturday';
//         break;
// }

// console.log(`Today is ${day}`);

// let num1 = Number('1234blue');
// let num2 = parseInt('1234blue');
// console.log(num1);
// console.log(num2);


//===
//=== 函数
//===

// 函数定义
// function greet(firstName = 'Smith', lastName = 'Doe'){
//     return 'Hello ' + firstName + ' ' + lastName;
// }

// console.log(greet('John', 'Mike'));

// 函数表达式
// const square = function(x){ //这里是一个匿名函数
//     return x*x;
// };

// console.log(square(3));

// 立即调用的函数表达式
// (function(){
//     console.log('IIFE Ran..');
// })();


// (function(name){
//     console.log('Hello ' + name);
// })('Brad');


// // 方法（在对象内部的函数）
// const todo = {
//     add: function(){
//         console.log('Add todo...');
//     },
//     edit: function(id){
//         console.log(`Edit todo ${id}`);
//     }
// }

// todo.add();
// todo.edit(22);


// For Loop
// for(let i = 0; i < 10; i++){
//     if(i === 2){
//         console.log('2 is my lucy number');
//         continue; //直接进入下一个循环，不再执行本次循环下面的语句
//     }

//     if(i == 5){
//         console.log('Stop the loop');
//         break;
//     }
//     console.log('Number: ' + i);
// }

// 遍历数组
const cars = ['Ford', 'Toyota', 'Chevy', 'Honda'];

// for(let i = 0; i < cars.length; i++){
//     console.log(cars[i]);
// }

// 另一种方法(推荐)
// cars.forEach(function(car, index){
//     console.log(`${index} : ${car}`);
// });

// Map
const users = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Mike'},
    {id: 3, name: 'Eric'}
];

const ids = users.map(function(users){
    return users.id;
});

console.log(ids);


// For-in Loop
// const user = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 40
// }

// for(let x in user){
//     console.log(`${x} : ${user[x]}`);
// }
