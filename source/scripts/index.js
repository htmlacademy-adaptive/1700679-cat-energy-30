/* в этот файл добавляет скрипты*/
const burger = document.querySelector('.main-header__burger');
const mainNav = document.querySelector('.main-header__main-nav');

if (mainNav.classList.contains('main-header__main-nav--nojs')) {
  mainNav.classList.remove('main-header__main-nav--nojs');
}

burger.addEventListener('click', function() {
  if (this.classList.contains('main-header__burger--active')) {
    this.classList.remove('main-header__burger--active');
    mainNav.classList.remove('main-header__main-nav--opened');
  } else {
    this.classList.add('main-header__burger--active');
    mainNav.classList.add('main-header__main-nav--opened');
  }
});
