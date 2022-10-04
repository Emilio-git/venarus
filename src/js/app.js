'use strict';

// import testWebP from './components/webp.js';
import slider from './modules/slider.js';

window.addEventListener('DOMContentLoaded', () => {
   const menuBtn = document.querySelector('.nav__burger'),
         menu = document.querySelector('.navigation'),
         menuInner = document.querySelector('.nav__inner');

   menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('active-menu');
      menu.classList.toggle('hide');
      menuInner.classList.toggle('hide-icons');
      document.querySelector('body').classList.toggle('lock');
   });

   const links = document.querySelector('a');

   links.addEventListener('click', (e) => {
      e.preventDefault();
   });

   slider({
      container: '.product__slider',
      nextArrow: '.product__slider-next',
      prevArrow: '.product__slider-prev',
      wrapper: '.product__slider-wrapper',
      slide: '.product__slide',
      field: '.product__slider-inner'
   });


   const infoAboutBtn = document.querySelector('.about__title-subimg'),
         infoAbout = document.querySelector('.about__subtitle');

   infoAboutBtn.addEventListener('mouseover', () => {
      infoAbout.classList.add('about-info__active');
   });

   infoAboutBtn.addEventListener('mouseout', () => {
      infoAbout.classList.remove('about-info__active');
   });



})