'use strict';

const toggler = document.querySelector('.menu-button');
const navMenuList = document.querySelectorAll('.nav-buttom__link');
const menu = document.querySelector('.nav-buttom');

toggler.addEventListener('click', () => {
  menu.classList.toggle('nav-buttom--laptop');
});

navMenuList.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('nav-buttom--laptop');
  });
});

const form = document.querySelector('form');

form.addEventListener('submit', e => {
  e.preventDefault();
  form.reset();
});
