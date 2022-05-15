const urlMovies = "http://localhost:3000/movies"

window.addEventListener("load", ()=>{
  const bgFavoriteMovie = document.querySelector("#bgFavoriteMovie");
  fetch(urlMovies)
    .then(response=>response.json())
    .then(data=>data.forEach(e => {
      e.favorite == true? bgFavoriteMovie.style.backgroundImage = `url(${e.image})`: "";
    }))
})