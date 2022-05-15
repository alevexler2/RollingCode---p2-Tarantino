const urlMovies = "http://localhost:3000/movies"
const urlUsers = "http://localhost:3000/users";
const inputSearch = document.querySelector("#inputSearch")

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
let correo = localStorage.getItem("correo")
let contraseña = localStorage.getItem("contraseña")
  fetch(urlUsers)
    .then(response=>response.json())
    .then(data=>data.forEach(e => {
      let usuario;
      console.log(e.contraseña);
      if(contraseña == e.contraseña && correo == e.usuario){
       usuario = e.administrador
      } else {
      // window.location = "http://127.0.0.1:5501/index.html"
      }
      console.log(usuario);
      usuario == false? adminLink.classList.add("d-none"): adminLink.classList.remove("d-none");
    }))
    
})




window.addEventListener("load", ()=>{
  const bgFavoriteMovie = document.querySelector("#bgFavoriteMovie");
  fetch(urlMovies)
    .then(response=>response.json())
    .then(data=>data.forEach(e => {
      e.favorite == true? bgFavoriteMovie.style.backgroundImage = `url(${e.image})`: "";
    }))
})

