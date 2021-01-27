// CREATE ELEMENTS

// const li = document.createElement('li');

// // Add class
// li.className = 'collection-item';

// // Add id
// li.id = 'new-item';

// // Add attribute
// li.setAttribute('title', 'New Item');

// // Create text node and append
// li.appendChild(document.createTextNode('Hello World'));

// // Create new link element
// const link = document.createElement('a');
// // Add classes
// link.className = 'delete-item secondary-content';
// // Add icon html
// link.innerHTML = '<i class="fa fa-remove"></i>';

// // Append link into li
// li.appendChild(link);

// // append li as child to ul
// document.querySelector('ul.collection').appendChild(li);

// console.log(li);


// REPLACE ELEMENT

// // Create element
// const newHeading = document.createElement('h2');
// // Add id
// newHeading.id = 'task-title';
// // New text node
// newHeading.appendChild(document.createTextNode('Task List'));

// // Get the old heading
// const oldHeading = document.getElementById('task-title');
// // Parent
// const cardAction = document.querySelector('.card-action');

// // Replace
// cardAction.replaceChild(newHeading, oldHeading);


// REMOVE ELEMENT
// const lis = document.querySelectorAll('li');
// const list = document.querySelector('ul');

// Remove list item
// lis[0].remove();

// Remove child element
// list.removeChild(lis[3]);

// CLASS & ATTR
// const firstLi = document.querySelector('li:first-child');
// const link = firstLi.children[0];

// let val;

// Classes
// val = link.className;
// val = link.classList;
// link.classList.add('test');
// link.classList.remove('test');

// // Attributes
// val = link.getAttribute('href');
// val = link.setAttribute('href', 'http://baidu.com');
// val = link.hasAttribute('href');
// link.setAttribute('title', 'Baidu');
// link.removeAttribute('title;');
// val = link;

// console.log(val);


// EVENT LISTENERS & EVENT OBJECT

// document.querySelector('.clear-tasks').addEventListener('click', 
// function(e){
//     console.log('Hello World');
//     e.preventDefault();
// })

// document.querySelector('.clear-tasks').addEventListener('click', onClick);

// function onClick(e){
//     // console.log('Clicked');

//     let val;
//     val = e;
//     //Event target element
//     val = e.target;
//     val = e.target.className;
//     val = e.target.classList;

//     // e.target.innerText = 'Hello';

//     //Event type
//     val = e.type;

//     //Timestamp
//     val = e.timeStamp;

//     //Coords event relative to the window
//     val = e.clientY;

//     //Coords event relative to the element
//     val = e.offsetY;

//     console.log(val);
//     e.preventDefault();
// }


// MOUSE EVENTS

// const clearBtn = document.querySelector('.clear-tasks');
// const card = document.querySelector('.card');
// const heading = document.querySelector('h5');

// // Event Handler
// function runEvent(e){
//     console.log(`EVENT TYPE: ${e.type}`);

//     heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

//     document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
// }

// Click
// clearBtn.addEventListener('click', runEvent);
// Double click
// clearBtn.addEventListener('dblclick', runEvent);
// Mousedown / Mouseup
// clearBtn.addEventListener('mousedown', runEvent);

// // Mouseenter / Mouseleave
// card.addEventListener('mouseenter', runEvent);
// card.addEventListener('mouseleave', runEvent);
// // Mouseover / Mouseout 注意区别
// card.addEventListener('mouseover', runEvent);
// card.addEventListener('mouseout', runEvent);

// Mousemove
// card.addEventListener('mousemove', runEvent);


// Keyboard & Input Event
const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');

// Clear input
taskInput.value = '';

// form.addEventListener('submit', runEvent);

// Keydown / Keyup / Keypress
taskInput.addEventListener('keydown', runEvent);
// Focus / Blue
taskInput.addEventListener('focus', runEvent);
// Cut / Paste
taskInput.addEventListener('cut', runEvent);
// Input
taskInput.addEventListener('input', runEvent);
// Change 在选择框更改选项时触发

function runEvent(e){
    console.log(`EVENT TYPE:  ${e.type}`);
    // console.log(taskInput.value);
    // heading.innerText = e.target.value;
}