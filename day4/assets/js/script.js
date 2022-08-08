const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const btnClose = $('.close');
const btnPrev = $('.prev');
const btnNext = $('.next');
const images = $$('.image img');
const galleryImg = $('.gallery__inner img');
const gallery = $('.gallery');
let currentIndex = 0;
const lengthImg = images.length;

function galleryShow() {
    if (currentIndex == 0) {
        btnPrev.classList.add('hide');
    } else {
        btnPrev.classList.remove('hide');
    }
    if (currentIndex == lengthImg - 1) {
        btnNext.classList.add('hide');
    } else {
        btnNext.classList.remove('hide');
    }

    galleryImg.src = images[currentIndex].src;
    gallery.classList.add('show');
}

images.forEach((element, index) => {
    element.addEventListener("click", () => {
        currentIndex = index;
        galleryShow();
    })
});


btnClose.addEventListener('click', () => {
    gallery.classList.remove('show');
})

document.addEventListener('keydown', (event) => {
    var e = event || window.event;
    if (e.keyCode == 27) {
        gallery.classList.remove('show');
    }
    if (e.keyCode == 37 && currentIndex > 0) { //LEFT
        currentIndex--;
        galleryShow();
    } else if (e.keyCode == 39 && currentIndex < 7) { //RIGHT
        currentIndex++;
        galleryShow();
    }
})

btnPrev.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        galleryShow();
    }
})

btnNext.addEventListener('click', () => {
    if (currentIndex < lengthImg - 1) {
        currentIndex++;
        galleryShow();
    }
})