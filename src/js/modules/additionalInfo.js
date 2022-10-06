function additionalInfo() {
   const infoAboutBtn = document.querySelector('.about__title-subimg'),
   infoAbout = document.querySelector('.about__subtitle');

   infoAboutBtn.addEventListener('mouseover', () => {
   infoAbout.classList.add('about-info__active');
   });

   infoAboutBtn.addEventListener('mouseout', () => {
   infoAbout.classList.remove('about-info__active');
   });
}

export default additionalInfo;