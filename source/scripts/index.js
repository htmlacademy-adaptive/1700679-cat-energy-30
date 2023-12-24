/* в этот файл добавляет скрипты*/
const burger = document.querySelector('.burger');
const nav = document.querySelector('.main-nav');

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
  }
});

