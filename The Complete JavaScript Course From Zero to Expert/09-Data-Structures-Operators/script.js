"use strict";

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  // NOTE ES6加强的语法
  // 如果要在此对象中引入一个外部对象作为属性：
  // objectExternal = objectExternal, // 老写法
  // objectExternal, // ES6
  openingHours,

  // 方法的老写法
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // ES6
  // order(starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },

  // 传一个object作为参数，而不是参数列表，就可以忽略参数的顺序
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be dilivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza: function (mainIng, ...otherIng) {
    console.log(mainIng);
    console.log(otherIng);
  },
};

/*
restaurant.orderDelivery({
  time: '22:30',
  address: 'ChangSha',
  starterIndex: 2,
  mainIndex: 1
});
*/

// NOTE 解构数组

/*
const arr = [2, 3, 4];
const [x, y, z] = arr;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// 交换
// const temp = main;
// main = secondary;
// secondary = temp;

[main, secondary] = [secondary, main];
console.log(main, secondary);

// 嵌套
const nested = [2, 3, [4, 5]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

// 默认值
const [p = 1, q = 1, r = 1] = [5, 6];
console.log(p, q, r);
*/

// NOTE 解构对象

/*
const { name, openingHours, categories } = restaurant;
console.log(name);

const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
console.log(restaurantName);

// 默认值
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// 改变变量值
let a = 111;
let b = 222;
const obj = { a: 23, b: 7, c: 12 };
// 花括号内为code block，不能赋值给code block，因此在外面加上括号来区别
({ a, b } = obj);
console.log(a, b);
*/

// NOTE 展开操作符
const arr = [3, 4, 5];
const newArr = [1, 2, ...arr];

console.log(newArr);
console.log(...newArr);

// 赋值数组（浅拷贝）
const mainMenuCopy = [...restaurant.mainMenu];

// 连接2个数组
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// Iterables: arrays, strings, maps, sets, NOT objects
const str = "jonas";
const letters = [...str, "S."]; // 只有在建立数组和传参时能用展开操作符
// console.log(letters);

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt("Ingredient 2?"),
//   prompt("Ingredient 3?"),
// ];
// console.log(ingredients);
// restaurant.orderPasta(...ingredients);

// Objects

const newRestaurant = { ...restaurant, foundedIn: 1998 };
// console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
(restaurantCopy.name = "Ristorante Roma"), console.log(restaurantCopy.name);
console.log(restaurant.name);

// NOTE 剩余操作符(在等号左边)
// 必须防止最后，因为搜集的是剩余的参数，而不会搜集跳过的参数
const [a, , b, ...others] = [1, 2, 3, 4, 5];
console.log(others);

// 对于对象的属性，则不存在跳过的参数，因为属性之间没有顺序
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 在函数中应用
function add(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
}

add(1, 3, 5);
const x = [2, 4, 6];
add(...x);

restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");

// NOTE for-of loop
for (const item of menu) console.log(item);
// 加上索引
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

// NOTE 集合
const orderSet = new Set(["Pizza", "Pasta", "Risotto", "Pizza"]);
console.log(orderSet);

console.log(orderSet.size);
// set不能取值，只能判断一个元素在不在set中
console.log(orderSet.has("Bread"));
orderSet.add("Bread");
orderSet.delete("Pasta");
// orderSet.clear();

for (const order of orderSet) console.log(order);

// NOTE map 对象的key只能是string，而map的key可以是任意类型
const rest = new Map();
rest
  .set("name", "Classico Italiano")
  .set("starterMenu", [
    "Focaccia",
    "Bruschetta",
    "Garlic Bread",
    "Caprese Salad",
  ])
  .set("mainMenu", ["Pizza", "Pasta", "Risotto"])
  .set(true, "We are open :D")
  .set(false, "We are closed :(");

console.log(rest.get(true));
// has()、delete()、size、clear()

rest.set([1, 2], "Test");
rest.set(document.querySelector("h1"), "Heading");
// 数组、对象等引用类型做为key时，不能这样取值，因为下一行的[1,2]和上一行的[1,2]在内存在并不是同一个地址
// console.log(rest.get([1,2]));
// 这样才行
const arr2 = [1, 2];
rest.set(arr2, "Test2");
console.log(rest.get(arr2));

// 把对象转换为map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));

console.log(hoursMap);

// 遍历
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1,'C'],
  [2,'Java'],
  [3,'JavaScript'],
  ['correct', 3],
  [true,'Correct 🎉'],
  [false, 'Try again!']
]);

