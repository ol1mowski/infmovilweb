let activeSlideNumber = 1;

let slide1 = document.querySelector('#slide1');
console.log(slide1);
let slide2 = document.querySelector('#slide2');
console.log(slide2);
let slide3 = document.querySelector('#slide3');
console.log(slide3);
let slide4 = document.querySelector('#slide4');
console.log(slide4);
let slide5 = document.querySelector('#slide5');
console.log(slide5);
let slide6 = document.querySelector('#slide6');
console.log(slide6);
let slide7 = document.querySelector('#slide7');
console.log(slide7);
let slide8 = document.querySelector('#slide8');
console.log(slide8);
let slide9 = document.querySelector('#slide9');
console.log(slide9);
let slide10 = document.querySelector('#slide10');
console.log(slide10);
let slide11 = document.querySelector('#slide11');
console.log(slide11);
let slide12 = document.querySelector('#slide12');
console.log(slide12);
let slide13 = document.querySelector('#slide13');
console.log(slide13);

let hideActiveSlide = () => {
    let activeSlide = document.querySelector('.active');
    activeSlide.classList.remove('active');
};

let showSlide = (slideNumber) => {
    hideActiveSlide();
    document.querySelector('#slide'+slideNumber).classList.add('active');
};

let showNextSlide = () => {
    if (activeSlideNumber == 13)
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
let showSlide10 = () => {
    showSlide(10);
};
let showSlide11 = () => {
    showSlide(11);
};

let showSlide12 = () => {
    showSlide(12);
};
let showSlide13 = () => {
    showSlide(13);
};

setInterval(showNextSlide, 3600);