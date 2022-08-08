// Se seleccionan  los elementos donde se colocará el texto de cada slide
const titleSlideElement = document.querySelector('.description>h2');
const textSlideElement = document.querySelector('.description>p');


// Textos de cada slide

const titleSlide = [
  'Discover innovative ways to decorate',
  'We are available all across the globe',
  'Manufactured with the best materials'
];

const textSlide = [
  "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing you vision to life. Create a room in your own style with our collection and make you property a reflection of you and what yo love.",
  "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any question? Don't hesitate to contact us today.",
  "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry , we understand what customers want for their home and office."
]


// Se selecciona el slider que contiene todas las imágenes
const slides = document.querySelectorAll(".slide");

// loop through slides and set each slides translateX
// ciclamos las imágenes y las colocamos una al lado de la otra
slides.forEach((slide, i) => {
  slide.style.transform = `translateX(${i * 100}%)`;
  slide.style.height = '100%';
  slide.style.zIndex = -i;
});

// Creamos el contador para el slider actual
let curSlide = 0;
// Delimitamos el máximo de sliders
let maxSlide = slides.length - 1;


/* Desktop buttons */

// Seleccionamos el botón en "desktop" para la siguiente imagen
const nextSlideDesktop = document.querySelector("#desktop-buttons > .btn-next");

// Se añade el event listener para añadir la funcionalidad al botón de "siguiente"
nextSlideDesktop.addEventListener("click", function () {
  nextSlide();
});

// Seleccionamos el botón en "desktop" para la imagen anterior
const prevSlideDesktop = document.querySelector("#desktop-buttons > .btn-prev");

// Añadimos la funcionalidad ahora para el botón de imagen "previa"
prevSlideDesktop.addEventListener("click", function () {
  prevSlide();
});


/* Mobile buttons */

// Seleccionamos el botón en "mobile" para la siguiente imagen
const nextSlideMobile = document.querySelector("#mobile-buttons > .btn-next");

// Se añade el event listener para añadir la funcionalidad al botón de "siguiente"
nextSlideMobile.addEventListener("click", function () {
  nextSlide();
});

// Seleccionamos el botón en "desktop" para la imagen anterior
const prevSlideMobile = document.querySelector("#mobile-buttons > .btn-prev");

// Añadimos la funcionalidad ahora para el botón de imagen "previa"
prevSlideMobile.addEventListener("click", function () {
  prevSlide();
});


/* Functions to change slide */

function nextSlide() {
  // Verificamos si el actual slider es el último, de ser asi, reiniciamos el contador 
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  //  Establecemos la posición del slider para visualizar el slide correspondiente 
  //  de acuerdo a la variable "curSlide"
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    slide.style.transition = '300ms ease-in';
  });

  //Establecemos el texto;
  setText();
}

function prevSlide() {
  // Verificamos si el actual slider es el primero, de ser asi reiniciamos el contador hasta el último slide 
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  //  Establecemos la posición del slider para visualizar el slide correspondiente 
  //  de acuerdo a la variable "curSlide"
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    slide.style.transition = '300ms ease-in';
  });

  //Establecemos el texto;
  setText();
}

// Se coloca el texto dentro de los elementos
function setText() {
  titleSlideElement.textContent = titleSlide[curSlide]
  textSlideElement.textContent = textSlide[curSlide]
}
setText();