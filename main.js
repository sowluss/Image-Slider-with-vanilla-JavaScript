const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');
const container = document.querySelector('.images');

let counter = 0;

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// * Next slide
function nextSlide() {
  // slide animation 
  container.animate([{opacity: '0.1'}, {opacity: '1.0'}], {duration: 1000, fill: 'forwards'});

  // chacks if it runs out of sliders 
  if(counter === 4) {
    counter = -1;
  }
  counter++;
  container.style.backgroundImage = `url(img/slide-${counter}.jpeg`
}

// * Previous slide
function prevSlide() {
  // slide animation 
  container.animate([{opacity: '0.1'}, {opacity: '1.0'}], {duration: 1000, fill: 'forwards'});
  // chacks if it runs out of sliders 
  if(counter === 0) {
    counter = 5;
  }
  counter--;
  container.style.backgroundImage = `url(img/slide-${counter}.jpeg`
}

