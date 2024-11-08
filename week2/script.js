const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');
const background = document.getElementById('background');
const images = ['images/alpes.jpg', 'images/himalaya.jpeg', 'images/machu-pichu.jpg'];
let slideNumber = 1;
const slideInterval = 6000; // Interval time in milliseconds (e.g., 3000ms = 3 seconds)
let autoSlide;

function updateBackground() {
    background.style.backgroundImage = `url(${images[slideNumber - 1]})`;
}

function nextSlide() {
    if (slideNumber < images.length) {
        slider.style.transform = `translateX(-${slideNumber * 800}px)`;
        slideNumber++;
    } else {
        slider.style.transform = `translateX(0px)`;
        slideNumber = 1;
    }
    updateBackground();
}

function previousSlide() {
    if (slideNumber > 1) {
        slider.style.transform = `translateX(-${(slideNumber - 2) * 800}px)`;
        slideNumber--;
    } else {
        slider.style.transform = `translateX(-${(images.length - 1) * 800}px)`;
        slideNumber = images.length;
    }
    updateBackground();
}

// Auto-slide function
function startAutoSlide() {
    autoSlide = setInterval(nextSlide, slideInterval);
}

// Stop and restart auto-slide on manual navigation
function resetAutoSlide() {
    clearInterval(autoSlide);
    startAutoSlide();
}

right.addEventListener('click', () => {
    nextSlide();
    resetAutoSlide();
});

left.addEventListener('click', () => {
    previousSlide();
    resetAutoSlide();
});

// Initialize background on page load and start auto-slide
updateBackground();
startAutoSlide();
