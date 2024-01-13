/* в этот файл добавляет скрипты*/
function mobileBurger() {
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
}

function loadImages() {
  const image1 = document.querySelector('.slider__img--before');
  const image2 = document.querySelector('.slider__img--after');
  image1.onload = function() {
    const aspectRatio1 = image1.naturalWidth / image1.naturalHeight;
    setAspectRatio(1, aspectRatio1);
  };

  image2.onload = function() {
    const aspectRatio2 = image2.naturalWidth / image2.naturalHeight;
    setAspectRatio(2, aspectRatio2);
  };
}

const slider = document.querySelector('.slider__range');
const container = document.querySelector('.slider__wrapper');

function setAspectRatio(imageNumber, aspectRatio) {
  const aspectRatioString = aspectRatio.toString();
  document.querySelector('.slider__wrapper-img').style.setProperty('--aspect-ratio', aspectRatioString);
}

slider.addEventListener('input', (e) => {
  container.style.setProperty('--position', `${e.target.value }%`);
});

mobileBurger();
loadImages();
