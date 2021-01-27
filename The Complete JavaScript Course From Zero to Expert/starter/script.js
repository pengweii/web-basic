'use strict';

console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

// input类型使用value而不是textContent
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
