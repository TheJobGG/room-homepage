// Se selecciona el slider que contiene todas las imágenes
const slides = document.querySelectorAll(".slide");

// loop through slides and set each slides translateX
// ciclamos las imágenes y las colocamos una al lado de la otra
slides.forEach((slide, i) => {
  slide.style.transform = `translateX(${i * 100}%)`;
});

// Creamos el contador para el slider actual
let curSlide = 0;
// Delimitamos el máximo de sliders
let maxSlide = slides.length -1;


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

function nextSlide(){
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
  });
}

function prevSlide(){
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
  });
}