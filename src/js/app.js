'use strict';

// import testWebP from './components/webp.js';

window.addEventListener('DOMContentLoaded', () => {
   const menuBtn = document.querySelector('.nav__burger'),
         menu = document.querySelector('.navigation');

   menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('active-menu');
      menu.classList.toggle('hide');
   });
})