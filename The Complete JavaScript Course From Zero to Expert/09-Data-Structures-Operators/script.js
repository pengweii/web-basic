'use strict';

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

/*
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


restaurant.orderDelivery({
  time: '22:30',
  address: 'ChangSha',
  starterIndex: 2,
  mainIndex: 1
});


// NOTE 解构数组

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


// NOTE 解构对象


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

*/

/*
/////////////////////////////////
// NOTE && and ||
// 可以用在任何数据类型中，返回任何数据类型，使用短路原则
console.log("---- OR ----");
console.log(3 || "Jonas");
console.log("" || "Jonas");
console.log(undefined || null);

// 若numGuests有定义就赋值给guests，否则就设为默认值10
// 利用短路原则设默认值可以避免三元表达式或if-else
// 但是当numGuests为0时，下面的方法都会失效，可以使用??解决
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// const guests2 = restaurant.numGuests || 10;

console.log("---- AND ----");
// 短路原则和or相反
console.log(0 && "Jonas");
console.log(7 && "Jonas");

// Practice example
// if(restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// 使用&&可以更加简洁，但会降低代码的可读性
// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// 空值合并操作符(nullish coalescing operator): ??
// nullish: null and undefined(NOT '' or 0)

*/

/////////////////////////////
/*
// SEC Coding Challenge

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1. ❌
// const players1 = game.players[0];
// const players2 = game.players[1];
const [players1, players2] = game.players;

// 2.
const [gk, ...fieldPlayers] = players1;

// 3.
const allPlayers = [...players1, ...players2];

// 4.
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

// 5. ❌
// 解构内嵌对象
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6.
const printGoals = function (...players) {
  for (let i = 0; i < players.length; i++) console.log(players[i]);
  console.log(players.length);
};

printGoals("Davies", "Muller", "Lewandowski", "Kimmich");

// 7. ❌
team1 < team2 && console.log("Team1 is more likely to win");
team1 > team2 && console.log("Team2 is more likely to win");

*/

// TODO Optional Chaining

/*
///////////////////////////////
// NOTE for-of loop
// for (const item of menu) console.log(item);
// // 加上索引
// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// Property names
const properties = Object.keys(openingHours);
console.log(properties);

// Property values
const values = Object.values(openingHours);
console.log(values);

// entries() 用法和数组稍有不同
// array.entries() vs Object.entries(object)
const entries = Object.entries(openingHours);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

*/

/*

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
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct 🎉"],
  [false, "Try again!"],
]);

console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt("Your answer:"));
const answer = 3;

// if (answer === question.get("correct")) {
//   console.log(question.get(true));
// } else {
//   console.log(question.get(false));
// }
console.log(question.get(question.get("correct") === answer));

// map转换成array
console.log([...question]);

// map的一些方法
console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);

*/

// NOTE Working with strings - I

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(airline.indexOf('P'));
console.log(airline.lastIndexOf('P'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7)); // 4~6，不会截取第7个
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.indexOf(' ') + 1)); // 不加1会包含空格

// string是primitive类型，不想object，为什么会有方法呢？其实是js在背后把string转换成了object，这个过程叫装箱(boxing).
// 转换成object后就有了indexOf等方法，string对象调用方法返回的是primitive类型
// js在背后做了这件事：
console.log(new String('jonas'));

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Comparing emails
const email = 'hello@jonas.io';
const loginEmail = ' Hello@Jonas.io \n';

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

// Replacing
const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate')); //正则表达式，g代表global

// Booleans: includes()、startsWith()、endsWith()

// Split and Join
console.log('a+very+nice+string'.split('+'));
const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

function capitalizeName(name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
}

capitalizeName('jonas ann smith');

// Padding
const message = 'Hello World!';
console.log(message.padStart(20, '+'));
console.log(message.padEnd(20, '+'));

function maskCreditCard(number) {
  const str = number + ''; // 若为数字则转换成字符串
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
}

console.log(maskCreditCard(43127568901990));

// Repeat
function planesInLine(n) {
  console.log(`There are ${n} planes waiting: ${'🛩'.repeat(n)}`);
}

planesInLine(7);

// SEC Coding Challenge 😫

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', readText);

function readText() {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    // console.log(first, second);
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
}

function camelCase(string) {
  const strings = string.trim().split('_');
  const camelString = [];
  for (const s of strings) {
    camelString.push(s.replace(s[0], s[0].toUpperCase()));
  }
  const camelized = camelString.join('');
  return camelized.replace(camelized[0], camelized[0].toLowerCase());
}

console.log(camelCase(' first_name'));
