var instance = new vidbg('.video', {
  mp4: 'video/world.mp4', // URL or relative path to MP4 video
  webm: 'video/world.webm', // URL or relative path to webm video
  poster: 'video/poster.jpg', // URL or relative path to fallback image
  overlay: false, // Boolean to display the overlay or not
});

//запуск паралакс (рокеты)
var rellax = new Rellax('.rocket');

//остановка паралакса при ширине <576px
//проверка условия
if (document.body.clientWidth < 576) {
  rellax.destroy();
}

//анимация AOS при скролле
AOS.init();