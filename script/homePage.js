const urlMovies = "http://localhost:3000/movies"
const urlUsers = "http://localhost:3000/users";
const linkAdmin = document.querySelector("#adminLink")
inputSearch.addEventListener("keydown",()=>{
  fetch(urlMovies)
    .then(response => response.json())
    .then(data=>data.forEach(e => {
      const inputSearch = document.querySelector("#inputSearch").value;
      if(e.title.toLowerCase().includes(inputSearch.toLowerCase()) && inputSearch !== ""){
        console.log(e.title)
      }
    }))
})

window.addEventListener("load", ()=>{
  fetch(urlUsers)
    .then(response=>response.json())
    .then(data=>{
      let correos = data.map(e=>{return e.correo})
      let correo = correos.find(e=>{return e == localStorage.getItem("correo")})
      localStorage.getItem("correo") == null? window.location = "http://127.0.0.1:5500/RollingCode---p2-Tarantino/index.html": "";
    })
  fetch(`${urlUsers}/1`)
    .then(response => response.json())
    .then(data => {
      console.log(data.correo);
      console.log(localStorage.getItem("correo"));
      data.correo == localStorage.getItem("correo")? document.querySelector("#adminLink").classList.remove("d-none"): document.querySelector("#adminLink").classList.add("d-none");
      console.log(linkAdmin);
    })  
})


/*-----------------------------------------
*/ 


window.addEventListener("load", ()=>{
  const bgFavoriteMovie = document.querySelector("#bgFavoriteMovie");
  fetch(urlMovies)
    .then(response=>response.json())
    .then(data=>data.forEach(e => {
      e.favorite == true? bgFavoriteMovie.style.backgroundImage = `url(${e.image})`: "";
    }))
})

// carrusel chico
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
const boxCarrusel = document.querySelector(".boxCarrusel");
let maxScollLeft = boxCarrusel.clientWidth;
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