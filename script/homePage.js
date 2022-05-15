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
      correo != localStorage.getItem("correo")? window.location = "http://127.0.0.1:5501/index.html": "";
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

