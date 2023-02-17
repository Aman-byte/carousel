const carouselContainer = document.querySelector('.carousel-container');
const carouselButtons = document.querySelectorAll('.carousel-button');

let currentIndex = 0;
let intervalId;

function startCarousel() {
  intervalId = setInterval(() => {
    if (currentIndex === 2) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
    carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateActiveButton();
  }, 3000);
}

function updateActiveButton() {
  carouselButtons.forEach((button, index) => {
    if (index === currentIndex) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
}

function stopCarousel() {
  clearInterval(intervalId);
}

carouselButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    stopCarousel();
    currentIndex = index;
    carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateActiveButton();
    startCarousel();
  });
});

startCarousel();
