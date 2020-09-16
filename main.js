const slider = document.querySelector(".slider");
const slideList = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');

let auto = true; // Auto scroll
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');

    if (current.nextElementSibling && current.nextElementSibling.classList.contains("slide")) {
        current.nextElementSibling.classList.add('current');
    } else {
        slideList[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
};

const prevSlide = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');

    if (current.previousElementSibling) {
        current.previousElementSibling.classList.add('current');
    } else {
        slideList[slideList.length - 1].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
};

// Button events
next.addEventListener('click', e => {
    nextSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

prev.addEventListener('click', e => {
    prevSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

slider.addEventListener('mouseover', (e) => {
    auto = false;
    clearInterval(slideInterval);

    const current = document.querySelector(".current");
    current.classList.add("show");
});

slider.addEventListener('mouseleave', (e) => {
    const current = document.querySelector(".current");
    current.classList.remove("show");

    auto = true;
    nextSlide();
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
});

// Auto slide
if (auto) {
    slideInterval = setInterval(nextSlide, intervalTime);
}
