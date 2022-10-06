function autoSlider({container, slide, dots, wrapper, field}) {
   const slidesInfo = document.querySelectorAll(slide),
         sliderInfo = document.querySelector(container),
         dotsInfo = document.querySelectorAll(dots),
         slidesWrapperInfo = document.querySelector(wrapper),
         slidesFieldInfo = document.querySelector(field),
         width = window.getComputedStyle(slidesWrapperInfo).width;
   
   let slideIndexInfo = 1,
               offset = 0;

   slidesFieldInfo.style.width = 100 * slidesInfo.length + '%';
   slidesInfo.forEach(slide => {
      slide.style.width = width;
   });
   sliderInfo.style.position = 'relative';

   function changeOffset (widthSize) {
      return +widthSize.replace(/\D/g, '');
   }
   function changeDot(slideIndex) {
      dotsInfo.forEach(dot => {
         dot.classList.remove('active-dot');
      });
      dotsInfo[slideIndex - 1].classList.add('active-dot');
   }

   const nextSlideInterval = setInterval(() => nextSlide(), 3000);

   function nextSlide() {
      if (offset == changeOffset(width) * (slidesInfo.length - 1)) {
         offset = 0;
      } else {
         offset += changeOffset(width);
      }

      slidesFieldInfo.style.transform = `translateX(-${offset}px)`;

      if (slideIndexInfo == slidesInfo.length) {
         slideIndexInfo = 1;
      } else {
         slideIndexInfo++;
      }
      changeDot(slideIndexInfo);
   }


   dotsInfo.forEach(dot => {
      dot.addEventListener('click', (e) => {
         const slideTo = e.target.getAttribute('data-slide-to');
         slideIndexInfo = slideTo;
         offset = changeOffset(width) * (slideTo - 1);

         slidesFieldInfo.style.transform = `translateX(-${offset}px)`;
         changeDot(slideIndexInfo);
      });
   });
}

export default autoSlider;