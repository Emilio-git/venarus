function activateMenu() {
   const menuBtn = document.querySelector('.nav__burger'),
   menu = document.querySelector('.navigation'),
   menuInner = document.querySelector('.nav__inner');
   
   menuBtn.addEventListener('click', () => {
   menuBtn.classList.toggle('active-menu');
   menu.classList.toggle('hide');
   menuInner.classList.toggle('hide-icons');
   document.querySelector('body').classList.toggle('lock');
   });
}

export default activateMenu;
