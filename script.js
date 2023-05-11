const carousel = document.querySelector('.carousel');
const container = document.querySelector('.carousel-container');
const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');
const indicators = document.querySelectorAll('.carousel-indicator');
const interval = 5000;
let index = 0;
let timer;

function slide() {
  index++;
  if (index > items.length - 1) {
    index = 0;
  }
  container.style.transform = `translateX(-${index * 100}%)`;
  indicators.forEach(indicator => {
    indicator.classList.remove('active');
  });
  indicators[index].classList.add('active');
  timer = setTimeout(slide, interval);
  }
  
  function stopSlide() {
    clearInterval(timer);
  }
  
  function prev() {
    index--;
    if (index < 0) {
      index = items.length - 1;
    }
    container.style.transform = `translateX(-${index * 100}%)`;
    indicators.forEach(indicator => {
      indicator.classList.remove('active');
    });
    indicators[index].classList.add('active');
  }
  
  function next() {
    index++;
    if (index > items.length - 1) {
      index = 0;
    }
    container.style.transform = `translateX(-${index * 100}%)`;
    indicators.forEach(indicator => {
      indicator.classList.remove('active');
    });
    indicators[index].classList.add('active');
  }
  
  carousel.addEventListener("mouseover", stopSlide);
  carousel.addEventListener('mouseout', () => timer = setTimeout(slide, interval));
  prevBtn.addEventListener('click', prev);
  nextBtn.addEventListener('click', next);
  indicators.forEach((indicator, i) => {
    indicator.addEventListener('click', () => {
      index = i;
      container.style.transform = `translateX(-${index * 100}%)`;
      indicators.forEach(indicator => {
        indicator.classList.remove('active');
      });
      indicators[index].classList.add('active');
    });
  });
  
  timer = setTimeout(slide, interval);