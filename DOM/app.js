// let val;

// val = document;
// // val = document.all[2];
// val = document.head;
// val = document.domain;
// val = document.URL;

// val = document.forms[0];
// val = document.forms[0].id;

// val = document.scripts[2].getAttribute('src');

// let scripts = document.scripts;
// let scriptsArr = Array.from(scripts);

// scriptsArr.forEach(function(script){
//     console.log(script.getAttribute('src'));
// })

// console.log(val);


// document.getElementById()

// console.log(document.getElementById('task-title'));
// // Get things from the element
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

// // Change styling
// const taskTitle = document.getElementById('task-title');
// taskTitle.style.background = '#333';
// taskTitle.style.color = '#fff';
// taskTitle.style.padding = '5px';

// // Change content
// taskTitle.textContent = 'Task List';
// taskTitle.innerText = 'My Tasks';
// taskTitle.innerHTML = '<span style="color:red">Task List</span>';


// document.querySelectors()
// 是一个单元素选择器

// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5'));
// // 只会选中第一个
// document.querySelector('li').style.color = 'red';
// document.querySelector('ul li').style.color = 'blue';

// document.querySelector('li:last-child').style.color = 'red';
// document.querySelector('li:nth-child(4)').textContent = 'red';
// // 因为是单元素选择器，所以只会选中第一个奇数
// document.querySelector('li:nth-child(odd)').style.background = 'red';


// document.getElementsByClassName

// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';
// items[3].textContent = 'Hello';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

// console.log(listItems);

// document.getElementsByTagName

// let lis = document.getElementsByTagName('li');
// console.log(lis);

// // Convert HTML Collection into array
// lis = Array.from(lis);

// lis.forEach(function(li, index){
//     console.log(li.className);
//     li.textContent = `${index}: Hello`;
// });


// document.querySelectorAll

// const items = document.querySelectorAll('ul.collection li.collection-item');
// // 数据类型为node-list，不是collection，不用转换成array
// items.forEach(function(item, index){
//     item.textContent = `${index}: Hello`;
// });

// const liOdd = document.querySelectorAll('li:nth-child(odd)');
// const liEven = document.querySelectorAll('li:nth-child(even)');

// liOdd.forEach(function(li, index){
//     li.style.background = '#ccc';
// })

// for(let i = 0; i < liEven.length; i++){
//     liEven[i].style.background = '#f4f4f4';
// }

// console.log(liOdd);


// Traversing the DOM
