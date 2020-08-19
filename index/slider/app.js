const carouselSlide = document.querySelector('.slide');
const carouselImages = document.querySelectorAll('.slide img');

//Buttons
const prevButton = document.querySelector('#prevBtn');
const nextButton = document.querySelector('#nextBtn');


//Counter
let counter = 1;
const size = carouselImages[0].naturalWidth;

console.log(size);

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//Button listeners

nextButton.addEventListener('click',()=>{
    if(counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

prevButton.addEventListener('click',()=>{
    if(counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    
});

carouselSlide.addEventListener('transitionend', () => {
    if(carouselImages[counter].id === 'lastClone'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length -2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if(carouselImages[counter].id === 'firstClone'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});

