const carrusel = document.querySelector("#carrusel");
window.addEventListener("load", () => {
  fetch("http://localhost:3000/movies")
  .then((response) => response.json())
  .then((response) => response.forEach(element => {
    if (element != "") {
      carrusel.innerHTML += 
      `<div class="mx-1 d-flex col-6 col-sm-3 col-xl-2 cardMovie">
        <img class="container px-0 imgCardMovie" id="${element.id}" src="${element.image}" alt="${element.title}">
        <div class="container rounded desCardMovie">
          <div class="d-flex justify-content-center align-items-center btnPlay">
            <img class="p-1 iconPlay" src="../img/boton-de-play.png" alt="icon play">
          </div>
        </div>
      </div>`;
    }
  }));
});
// carrusel búcle
const boxCarrusel = document.querySelector(".boxCarrusel");
let maxScollLeft = boxCarrusel.clientWidth;
console.log(maxScollLeft);
let interval = null;
let step = 1;
const start = () => {
  interval = setInterval(() => {
    boxCarrusel.scrollLeft = boxCarrusel.scrollLeft + step;
    if (boxCarrusel.scrollLeft === maxScollLeft) {
      step = step * - 1;
    } else if (boxCarrusel.scrollLeft === 0) {
      step = step * - 1;      
    }
  }, 10);
}
const stop = () => {
  clearInterval(interval);
}
boxCarrusel.addEventListener("mouseover", () => {
  stop();
});
boxCarrusel.addEventListener("mouseout", () => {
  start();
});
start();