const slider = document.querySelector('.slider__range');
const container = document.querySelector('.slider__wrapper');

slider.addEventListener('input', (e) => {
  container.style.setProperty('--position', `${e.target.value}%`);
});
