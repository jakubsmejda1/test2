
let index = 0;
const slides = document.getElementById('slides');
const totalSlides = slides.children.length;

setInterval(() => {
  index = (index + 1) % totalSlides;
  slides.style.transform = `translateX(-${index * 100}vw)`;
}, 6000); // mění obrázek každých 6 sekund