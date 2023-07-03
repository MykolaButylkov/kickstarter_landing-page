'use strict';

const toggler = document.querySelector('.menu-button');
const menu = document.querySelector('.nav-buttom');

toggler.addEventListener('click', () => {
  menu.classList.toggle('nav-buttom--laptop');
});

const form = document.querySelector('form');

form.addEventListener('submit', e => {
  e.preventDefault();
  form.reset();
});
