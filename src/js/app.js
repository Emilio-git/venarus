'use strict';

// import testWebP from './components/webp.js';

window.addEventListener('DOMContentLoaded', () => {
   const menuBtn = document.querySelector('.nav__burger'),
         menu = document.querySelector('.navigation'),
         menuInner = document.querySelector('.nav__inner');

   menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('active-menu');
      menu.classList.toggle('hide');
      menuInner.classList.toggle('hide-icons');
   });

   const links = document.querySelector('a');

   links.addEventListener('click', (e) => {
      e.preventDefault();
   });
})