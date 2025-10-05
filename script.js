
let index = 0;
const slides = document.getElementById('slides');
const totalSlides = slides.children.length;

setInterval(() => {
  index = (index + 1) % totalSlides;
  slides.style.transform = `translateX(-${index * 100}vw)`;
}, 6000); // mění obrázek každých 6 sekund


// Vylepšená verze slideru s ovládáním
let currentSlide = 0;
let autoPlayInterval;

function showSlide(n) {
  currentSlide = (n + totalSlides) % totalSlides;
  slides.style.transform = `translateX(-${currentSlide * 100}vw)`;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

function startAutoPlay() {
  autoPlayInterval = setInterval(nextSlide, 6000);
}

function stopAutoPlay() {
  clearInterval(autoPlayInterval);
}

// Přidání ovládacích tlačítek
const sliderSection = document.querySelector('.slider');
if (sliderSection) {
  const prevBtn = document.createElement('button');
  prevBtn.textContent = '◀';
  prevBtn.style.color = '#dcaa45';
  prevBtn.style.position = 'absolute';
  prevBtn.style.left = '10px';
  prevBtn.style.top = '50%';
  prevBtn.style.transform = 'translateY(-50%)';
  prevBtn.style.fontSize = '2rem';
  prevBtn.style.background = 'rgba(255, 255, 255, 0)';
  prevBtn.style.border = 'none';
  prevBtn.style.borderRadius = '50%';
  prevBtn.style.cursor = 'pointer';

  const nextBtn = document.createElement('button');
  nextBtn.textContent = '▶';
  nextBtn.style.color = '#dcaa45';
  nextBtn.style.position = 'absolute';
  nextBtn.style.right = '10px';
  nextBtn.style.top = '50%';
  nextBtn.style.transform = 'translateY(-50%)';
  nextBtn.style.fontSize = '2rem';
  nextBtn.style.background = 'rgba(255, 255, 255, 0)';
  nextBtn.style.border = 'none';
  nextBtn.style.borderRadius = '50%';
  nextBtn.style.cursor = 'pointer';

  sliderSection.appendChild(prevBtn);
  sliderSection.appendChild(nextBtn);

  prevBtn.addEventListener('click', () => {
    prevSlide();
    stopAutoPlay();
    startAutoPlay();
  });
  nextBtn.addEventListener('click', () => {
    nextSlide();
    stopAutoPlay();
    startAutoPlay();
  });
}

// Spustit automatické přehrávání
startAutoPlay();