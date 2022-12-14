function slider ({container, slide, nextArrow, prevArrow, wrapper, field}) {  
   // Слайдер-карусель
   const prev = document.querySelector(prevArrow),
         next = document.querySelector(nextArrow), 
         slides = document.querySelectorAll(slide),
         slider = document.querySelector(container),
         slidesWrapper = document.querySelector(wrapper), // wrapper
         slidesField = document.querySelector(field), // inner
         width = window.getComputedStyle(slidesWrapper).width; // wrapper width
   
   let slideIndex = 1, //первый слайд
       offset = 0; // перемещение

   slidesField.style.width = 100 * slides.length + '%'; // длина field 400%
   slidesField.style.display = 'flex';
   slidesField.style.transition = '0.5s all';

   slidesWrapper.style.overflow = 'hidden'; // прячет другие слайды

   slides.forEach(slide => {
      slide.style.width = width;
   });

   slider.style.position = 'relative';

   // Сокращение кода
   function changeOffset (widthSize) {
      return +widthSize.replace(/\D/g, '');
   }
   // ===========================================================

   next.addEventListener('click', () => {
      if (offset == changeOffset(width) * (slides.length - 1)) {
         offset = 0;
      } else {
         offset += changeOffset(width);
      }

      slidesField.style.transform = `translateX(-${offset}px)`;
   });

   prev.addEventListener('click', () => {
      if (offset == 0) {
         offset = changeOffset(width) * (slides.length - 1);
      } else {
         offset -= changeOffset(width);
      }

      slidesField.style.transform = `translateX(-${offset}px)`;
   });
}

export default slider;