function productionSlider ({nextArrow, prevArrow, firstSlide, secondSlide, field, activeVideo}) {  
   const firstBox = document.querySelector(firstSlide),
         secondBox = document.querySelector(secondSlide),
         prev = document.querySelector(prevArrow),
         next = document.querySelector(nextArrow),
         slider = document.querySelector(field),
         activeBox = document.querySelector(activeVideo);

   let i = 0;
   prev.addEventListener('click', () => {
      if(i === 1) {
         firstBox.classList.remove('animate__first', 'active_video');
         secondBox.classList.remove('animate__second');
         
         firstBox.classList.add('animate__second');
         secondBox.classList.add('animate__first', 'active_video');
         
         i--;

         next.classList.toggle('dissabled_btn');
         prev.classList.toggle('dissabled_btn');


      }
   })

   next.addEventListener('click', () => {
      if (i === 0) {
         firstBox.classList.remove('animate__second');
         secondBox.classList.remove('animate__first', 'active_video');
         
         firstBox.classList.add('animate__first', 'active_video');
         secondBox.classList.add('animate__second');
         
         i++;

         next.classList.toggle('dissabled_btn');
         prev.classList.toggle('dissabled_btn');
      }
   })


   const modal = document.querySelector('.modal');

   activeBox.addEventListener('click', () => {
      openModal();
   });


   function openModal() {
      modal.classList.toggle('show_modal');
      document.body.style.overflow = 'hidden';
   }
   
   function closeModal() {
      modal.classList.toggle('show_modal');
      document.body.style.overflow = '';
   }
   

   modal.addEventListener('click', (e) => {
      const target = e.target;
      if (target === modal || e.target.getAttribute('data-close') == '') {
         closeModal();
      }
   });

   document.addEventListener('keydown', (e) => {
      if (e.code === 'Escape' && modal.classList.contains('show_modal')) {
         closeModal();
      }
   });
   
}
export default productionSlider;