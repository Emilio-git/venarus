'use strict';

// import testWebP from './components/webp.js';
import slider from './modules/slider.js';
import additionalInfo from './modules/additionalInfo.js';
import productionSlider from './modules/productionSlider.js';
import autoSlider from './modules/autoSlider.js';
import activateMenu from './modules/menu.js'

window.addEventListener('DOMContentLoaded', () => {
   const links = document.querySelectorAll('a');

   links.forEach(link => {
      link.addEventListener('click', (e) => {
         e.preventDefault();
      })
   });
   activateMenu();
   
   slider({
      container: '.product__slider',
      nextArrow: '.product__slider-next',
      prevArrow: '.product__slider-prev',
      wrapper: '.product__slider-wrapper',
      slide: '.product__slide',
      field: '.product__slider-inner'
   });

   additionalInfo();

   // productionSlider({
   //    container: '.production__slider',
   //    nextArrow: '.production__slider-next',
   //    prevArrow: '.production__slider-prev',
   //    wrapper: '.production__slider-wrapper',
   //    slide: '.production__slide',
   //    field: '.production__slider-wrapper'
   // });

   // const next = document.querySelector('.production__slider-next');
   // const disabled = document.querySelector('.disabled');
   // const slides = document.querySelectorAll('.production__slide');



   autoSlider({
      container: '.opinion__slider',
      dots: '.opinion__dot',
      wrapper: '.opinion__slider-wrapper',
      slide: '.opinion__video-box',
      field: '.opinion__slider-inner'
   });
})