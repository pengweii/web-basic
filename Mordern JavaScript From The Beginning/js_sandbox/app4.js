// WINDOW METHODS / OBJECTS / PROPERTIES

// Alert
// alert('Hello World');

// Prompt
// const input = prompt();
// alert(input);

// Confirm
// if(confirm('Are you sure?')){
//     console.log('YES');
// } else {
//     console.log('NO');
// }


// let val;

// Outer/Inner Height/Width
// val = window.outerHeight;
// val2 = window.innerHeight;

// Scroll points
// val = window.scrollY;

// Location Object
// val = window.location;
// val = window.location.hostname;
// val = window.location.port;
// val = window.location.href;
// val = window.location.search;

// Redirect
// window.location.href = 'http://www.baidu.com';
// Reload
// window.location.reload();

// History Object
// window.history.go(-1);
// val = window.history.length;

// Navigator Object
// val = window.navigator;
// val = window.navigator.appName;
// val = window.navigator.appVersion;
// val = window.navigator.userAgent;
// val = window.navigator.platform;
// val = window.navigator.vendor;
// val = window.navigator.language;

// console.log(val);


// 作用域
// Global scope
var a = 1;
let b = 2;
const c = 3;

// function test(){
//     var a = 4;
//     let b = 5;
//     const c = 6;
//     console.log('Function scope: ', a, b, c);
// }

// test();

// Block scope
if(true){
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('If scope:', a, b, c);
}

console.log('Global scope: ', a, b, c);