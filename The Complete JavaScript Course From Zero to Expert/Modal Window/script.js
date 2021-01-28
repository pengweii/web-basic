'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
//NOTE: 用querySelector选择匹配多个的class时只会选中第一个
const btnShowModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

for (let i = 0; i < btnShowModal.length; i++)
  btnShowModal[i].addEventListener('click', openModal);

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// 按下esc键取消弹窗
document.addEventListener('keydown', function (e) {
  // console.log(e);
  //NOTE: 事件对象e包含很多属性，其中key记录了刚才按下的按键
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }

  // if (e.key === 'Escape') {
  //   if (!modal.classList.contains('hidden')) {
  //     closeModal();
  //   }
  // }
})

