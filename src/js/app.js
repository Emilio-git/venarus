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

   productionSlider({
      nextArrow: '.production__slider-next',
      prevArrow: '.production__slider-prev',
      firstSlide: '.video_first',
      secondSlide: '.video_second',
      field: '.production__slider',
      activeVideo: '.active_video'
   });

   autoSlider({
      container: '.opinion__slider',
      dots: '.opinion__dot',
      wrapper: '.opinion__slider-wrapper',
      slide: '.opinion__video-box',
      field: '.opinion__slider-inner'
   });
})