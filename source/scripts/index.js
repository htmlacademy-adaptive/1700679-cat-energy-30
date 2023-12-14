/* в этот файл добавляет скрипты*/
var burger = document.querySelector('.burger');

burger.addEventListener('click', function() {
  if (this.classList.contains('burger--active')){
    this.classList.remove('burger--active')
  }
  else{
    this.classList.add('burger--active');
  }
});

