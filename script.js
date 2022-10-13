let activeSlideNumber = 1;

let slide1 = document.querySelector('#slide1');
let slide2 = document.querySelector('#slide2');
let slide3 = document.querySelector('#slide3');
let slide4 = document.querySelector('#slide4');
let slide5 = document.querySelector('#slide5');
let slide6 = document.querySelector('#slide6');
let slide7 = document.querySelector('#slide7');
let slide8 = document.querySelector('#slide8');
let slide9 = document.querySelector('#slide9');

let hideActiveSlide = () => {
    let activeSlide = document.querySelector('.active');
    activeSlide.classList.remove('active');
};

let showSlide = (slideNumber) => {
    hideActiveSlide();
    document.querySelector('#slide'+slideNumber).classList.add('active');
};

let showNextSlide = () => {
    if (activeSlideNumber == 9)
    {
        activeSlideNumber = 1;
    }else {
        activeSlideNumber = activeSlideNumber + 1;
    };
    showSlide(activeSlideNumber);
};

let showSlide1 = () => {
    showSlide(1);
};

let showSlide2 = () => {
    showSlide(2);
};
let showSlide3 = () => {
    showSlide(3);
};
let showSlide4 = () => {
    showSlide(4);
};

let showSlide5 = () => {
    showSlide(5);
};
let showSlide6 = () => {
    showSlide(6);
};
let showSlide7 = () => {
    showSlide(7);
};

let showSlide8 = () => {
    showSlide(8);
};
let showSlide9 = () => {
    showSlide(9);
};

setInterval(showNextSlide, 3600);
//hiperlink
let hyper = document.querySelector('.link');
console.log(hyper)
hyper.addEventListener('click', () => {
    window.open('https://ol1mowski.github.io/infmovilweb/movie/Video_repara_1.mp4');
});