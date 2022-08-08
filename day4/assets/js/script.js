const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const btnClose = $('.close');
const btnPrev = $('.prev');
const btnNext = $('.next');
const images = $$('.image img');
const galleryImg = $('.gallery__inner img');
const gallery = $('.gallery');
const currenIndex = 0
images.forEach((element, index) => {
    element.onclick = () => {
        currenIndex = index;
        galleryImg.src = images[currenIndex].src;
        gallery.classList.add('show');
    }
});


close.addEventListener('click', () => {
    
})