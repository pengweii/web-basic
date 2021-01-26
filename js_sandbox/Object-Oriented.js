// Object literal:
// const brad = {
//   'name' : 'Brad',
//   'age' : 30
// }

// Person constructor
/*
function Person(firstName, lastName, dob){
  this.firstName = firstName;
  this.lastName = lastName;
  // this.age = age;
  // 由出生日期计算年龄的常用方法：
  this.birthday = new Date(dob);
  // this.calculateAge = function(){
  //   const diff = Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // }
}
*/

// const brad = new Person('Brad', 36);
// const john = new Person('John', 24);

// const brad = new Person('Brad', '9-10-1998');
// console.log(brad.calculateAge());

// Calculate age
// 计算年龄的方法为公用的，可以将其写入prototype
// Person.prototype.calculateAge = function(){
//   const diff = Date.now() - this.birthday.getTime();
//   const ageDate = new Date(diff);
//   return Math.abs(ageDate.getUTCFullYear() - 1970);
// }

// Person.prototype.getFullName = function(){
//   return `${this.firstName} ${this.lastName}`;
// }

// Person.prototype.getsMarried = function(newLastName){
//   this.lastName = newLastName
// }

// const john = new Person('John', 'Doe', '9-12-98');
// const mary = new Person('Mary', 'Johnson', 'March 20 1999');

// console.log(mary);

// console.log(john.calculateAge());

// console.log(mary.getFullName());

// mary.getsMarried('Smith');

// console.log(mary.getFullName());

//===
//=== 继承prototype
//===

// Person constructor
// function Person(firstName, lastName){
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// Greeting
// Person.prototype.greeting = function(){
//   return `Hello there, ${this.firstName} ${this.lastName}`;
// }

// const person1 = new Person('John', 'Doe');
// console.log(person1.greeting());

// Customer constructor
// function Customer(firstName, lastName, phone, membership){
//   Person.call(this, firstName, lastName); // 这样不会继承prototype的方法

//   this.phone = phone;
//   this.membership = membership;
// }

// Inherit the Person prototype methods
// Customer.prototype = Object.create(Person.prototype); //返回的constructor是Person()
// Make customer.prototype return Customer()
// Customer.prototype.constructor = Customer;

// Create customer
// const customer1 = new Customer('Tom', 'Smith', '555-5555-555', 'Standard');
// console.log(customer1);

// console.log(customer1.greeting());


// ===
// === 使用Object.create创造对象
// ===

// const personPrototypes = {
//   greeting: function() {
//     return `Hello there ${this.firstName} ${this.lastName}`;
//   },
//   getsMarried: function(newLastName) {
//     this.lastName = newLastName;
//   }
// }

// const mary = Object.create(personPrototypes);
// mary.firstName = 'Mary';
// mary.lastName = 'Williams';
// mary.age = 30;

// mary.getsMarried('Thompson');

// console.log(mary.greeting());

// const brad = Object.create(personPrototypes, {
//   firstName: {value: 'Brad'},
//   lastName: {value: 'Traversy'},
//   age: {value: 36}
// });

// console.log(brad);
// console.log(brad.greeting());


//===
//=== ES6 Class
//===

// class Person {
//   constructor(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birthday = new Date(dob);
//   }

//   greeting() {
//     return `Hello there, ${this.firstName} ${this.lastName}`
//   }

//   calculateAge() {
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
//   }

//   getsMarried(newLastName) {
//     this.lastName = newLastName;
//   }

//   // 静态方法
//   static addNumbers(x, y) {
//     return x + y;
//   }
// }

// const mary = new Person('Mary', 'Williams', '5-14-1998');

// mary.getsMarried('Thompson');

// console.log(mary);

// console.log(Person.addNumbers(2,3)); //若为mary.addNumbers(2,3)则会报错，因为静态方法无需实例化


//===
//=== 子类
//===

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello there, ${this.firstName} ${this.lastName}`
  }
}

class Customer extends Person {
  constructor(firstName, lastName, phone, membership){
    super(firstName, lastName);

    this.phone = phone;
    this.membership = membership;
  }

  static getMembershipCost(){
    return 500;
  }
}

const john = new Customer('John', 'Doe', '555-555-5555', 'Standard');

console.log(john.greeting());
console.log(Customer.getMembershipCost());