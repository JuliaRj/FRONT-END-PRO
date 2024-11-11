
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const arrowPrev = document.querySelector('.slider_button_prev');
const arrowNext = document.querySelector('.slider_button_next');

let activeSlideIndex = 0;

function updateActiveClasses() {
    document.querySelector('.slide.active')?.classList.remove('active');
    document.querySelector('.dot.active')?.classList.remove('active');
    slides[activeSlideIndex].classList.add('active');
    dots[activeSlideIndex].classList.add('active');
}

function updateArrows() {
    arrowPrev.classList.toggle('last_slide', activeSlideIndex === 0);
    arrowNext.classList.toggle('last_slide', activeSlideIndex === slides.length - 1);
}

function changeSlide(index) {
    activeSlideIndex = index;
    updateActiveClasses();
    updateArrows();
}

arrowPrev.addEventListener('click', () => {
    if (activeSlideIndex > 0) changeSlide(activeSlideIndex - 1);
});

arrowNext.addEventListener('click', () => {
    if (activeSlideIndex < slides.length - 1) changeSlide(activeSlideIndex + 1);
});

document.querySelector('.dots').addEventListener('click', (event) => {
    if (event.target.classList.contains('dot')) {
        const newIndex = [...dots].indexOf(event.target);
        changeSlide(newIndex);
    }
});

updateActiveClasses();
updateArrows();