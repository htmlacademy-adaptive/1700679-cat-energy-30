/* в этот файл добавляет скрипты*/
const burger = document.querySelector('.burger');
const nav = document.querySelector('.main-nav');
const mainNavList = document.querySelector('.main-nav__list');


if (nav.classList.contains('main-nav--nojs')) {
  nav.classList.remove('main-nav--nojs');
}

burger.addEventListener('click', function() {
  if (this.classList.contains('burger--active')) {
    this.classList.remove('burger--active');
    nav.classList.add('main-nav--closed');
  } else {
    this.classList.add('burger--active');
    nav.classList.remove('main-nav--closed');
    mainNavList.classList.add('main-nav-list--opened');
  }
});

