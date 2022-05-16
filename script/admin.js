const btnPost = document.querySelector("#btnPost");
const trBody = document.querySelector("#trBody");
const urlMovies = "http://localhost:3000/movies";
const urlUsers = "http://localhost:3000/users";
const checkbox = document.querySelector("#checkbox");

btnPost.addEventListener("click",()=>{
  checkbox.checked? checkbox.value = "publicada" : checkbox.value = "No publicada";
if(document.getElementsByTagName("#titleMovie").value == "" || document.querySelector("#yearMovie").value == "" 
  || document.querySelector("#ratedMovie").value == "" || document.querySelector("#runtimeMovie").value == "" 
  || document.querySelector("#directorMovie").value == "" || document.querySelector("#writerMovie").value == "" 
  || document.querySelector("#actorsMovie").value == "" || document.querySelector("#categoryMovie").value == "" 
  || document.querySelector("#languageMovie").value == "" || document.querySelector("#synopsisMovie").value == ""
  || document.querySelector("#imdbRatingMovie").value == "" || document.querySelector("#imageMovie").value == ""){
    alert("los campos no pueden estar vacios")
  } else {
    fetch(urlMovies, {
      method: "POST",
        body: JSON.stringify({
          title: document.querySelector("#titleMovie").value,
          year: document.querySelector("#yearMovie").value,
          rated: document.querySelector("#ratedMovie").value,
          runtime: document.querySelector("#runtimeMovie").value,
          director: document.querySelector("#directorMovie").value,
          writer: document.querySelector("#writerMovie").value,
          actors: document.querySelector("#actorsMovie").value,
          category: document.querySelector("#categoryMovie").value,
          language: document.querySelector("#languageMovie").value,
          synopsis: document.querySelector("#synopsisMovie").value,
          imdbRating: document.querySelector("#imdbRatingMovie").value,
          image: document.querySelector("#imageMovie").value,
          urlEspañol: document.querySelector("#urlEspañolMovie").value,
          urlIngles: document.querySelector("#urlInglesMovie").value,
          response: document.querySelector("#checkbox").value,
          favorite: "false"
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
    .then(()=>{
      location.reload()
    })
    .catch(()=>{
      alert("No se recibio respuesta del servidor")
    })
  }
})

fetch(urlMovies)
    .then(response => response.json())
    .then(data => {
      if(!data.error){
        data.forEach(e => {
          trBody.innerHTML += `
          <tr>
            <th scope="row">${e.id}</th>
            <td>${e.title}</td>
            <td>${e.category}</td>
            <td>${e.synopsis}</td>
            <td>${e.response}</td>
            <td>
              <button type="button" class="btn btn-primary m-1 btnTarantino text-center" data-bs-toggle="modal" data-bs-target="#editMovieModal" id="${e.id}" onclick="getIdBtn(id)">Editar</button>
              <div class="modal fade " id="editMovieModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modalTarantino">
                    <div class="container px-0 d-flex justify-content-center modal-content border-0 bgColorTarantino bgTarantino addMovieModal">
                      <button type="button" class="btn-close btn-close-white align-self-end pe-5 my-3" data-bs-dismiss="modal" aria-label="Close"></button>
                      <div class="container justify-content-center px-5">
                        <input type="text" class="form-control my-1" placeholder="title" id="editTitleMovie" value="">
                        <input type="text" class="form-control my-1" placeholder="year" id="editYearMovie">
                        <input type="text" class="form-control my-1" placeholder="rated" id="editRatedMovie">
                        <input type="text" class="form-control my-1" placeholder="Runtime" id="editRuntimeMovie">
                        <input type="text" class="form-control my-1" placeholder="director" id="editDirectorMovie">
                        <input type="text" class="form-control my-1" placeholder="Writer" id="editWriterMovie">
                        <input type="text" class="form-control my-1" placeholder="Actors" id="editActorsMovie">
                        <input type="text" class="form-control my-1" placeholder="category" id="editCategoryMovie">
                        <input type="text" class="form-control my-1" placeholder="Language" id="editLanguageMovie">
                        <input type="text" class="form-control my-1" placeholder="synopsis" id="editSynopsisMovie">
                        <input type="text" class="form-control my-1" placeholder="imdbRating" id="editImdbRatingMovie">
                        <input type="text" class="form-control my-1" placeholder="image" id="editImageMovie">
                        <input type="text" class="form-control my-1" placeholder="urlEspañol" id="editUrlEspañolMovie">
                        <input type="text" class="form-control my-1" placeholder="urlIngles" id="editUrlInglesMovie">
                        <div class="container d-flex flex-column align-items-center px-0 form-check py-2">
                          <div class="container col-10">
                            <input class="form-check-input col-6" type="checkbox" id="editCheckbox">
                            <label class="form-check-label text-white" for="checkbox">Publicar</label>
                          </div>
                          <button type="submit" class="btn my-3 col-10 btnTarantino" id="editBtn" onclick="btnPut(id)">Editar</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </td>
            <td><button class="btn m-1 btnDelete" id="${Number(100)+e.id}" onclick="btnDelete(id)">🗑</button></td>
            <td>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="${Number(200)+e.id}" onclick="favoriteMovie(id)">
                <label class="form-check-label" for="checkbox">Destacada</label>
              </div>
            </td>
          </tr>`; 
        })  
      }
    })
    .catch(()=>{
      alert("No se recibio respuesta del servidor")
    })
    
let btnId;
const getIdBtn = (e)=>{
  btnId = e;
  fetch(`${urlMovies}/${btnId}`)
    .then(response => response.json())
    .then(data => {
      document.querySelector("#editTitleMovie").value = data.title
      document.querySelector("#editYearMovie").value = data.year
      document.querySelector("#editRatedMovie").value = data.rated
      document.querySelector("#editRuntimeMovie").value = data.runtime
      document.querySelector("#editDirectorMovie").value = data.director
      document.querySelector("#editWriterMovie").value = data.writer
      document.querySelector("#editActorsMovie").value = data.actors
      document.querySelector("#editCategoryMovie").value = data.category
      document.querySelector("#editLanguageMovie").value = data.language
      document.querySelector("#editSynopsisMovie").value = data.synopsis
      document.querySelector("#editImdbRatingMovie").value = data.imdbRating
      document.querySelector("#editImageMovie").value = data.image
      document.querySelector("#editUrlEspañolMovie").value = data.urlEspañol
      document.querySelector("#editUrlInglesMovie").value = data.urlIngles
    })
}
const btnPut = ()=>{
  
  const editCheckbox = document.querySelector("#editCheckbox");
  document.querySelector("#editCheckbox").checked? editCheckbox.value = "publicada" : editCheckbox.value = "No publicada";
  if(document.querySelector("#editTitleMovie").value == "" || document.querySelector("#editYearMovie").value == "" 
  || document.querySelector("#editRatedMovie").value == "" || document.querySelector("#editRuntimeMovie").value == "" 
  || document.querySelector("#editDirectorMovie").value == "" || document.querySelector("#editWriterMovie").value == "" 
  || document.querySelector("#editActorsMovie").value == "" || document.querySelector("#editCategoryMovie").value == "" 
  || document.querySelector("#editLanguageMovie").value == "" || document.querySelector("#editSynopsisMovie").value == ""
  || document.querySelector("#editImdbRatingMovie").value == "" || document.querySelector("#editImageMovie").value == ""){
    alert("los campos no pueden estar vacios")
  } else {
    fetch(`${urlMovies}/${btnId}`,{
      method: "PUT",
      body: JSON.stringify({
        title: document.querySelector("#editTitleMovie").value,
          year: document.querySelector("#editYearMovie").value,
          rated: document.querySelector("#editRatedMovie").value,
          runtime: document.querySelector("#editRuntimeMovie").value,
          director: document.querySelector("#editDirectorMovie").value,
          writer: document.querySelector("#editWriterMovie"),
          actors: document.querySelector("#editActorsMovie").value,
          category: document.querySelector("#editCategoryMovie").value,
          language: document.querySelector("#editLanguageMovie").value,
          synopsis: document.querySelector("#editSynopsisMovie").value,
          imdbRating: document.querySelector("#editImdbRatingMovie").value,
          image: document.querySelector("#editImageMovie").value,
          urlEspañol: document.querySelector("#editUrlEspañolMovie").value,
          urlIngles: document.querySelector("#editUrlInglesMovie").value,
          response: document.querySelector("#editCheckbox").value
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    })
    .then(()=>{
      location.reload()
    })
  }
}

const btnDelete = (e)=>{
  console.log(e)
  fetch(`${urlMovies}/${e - 100}`,{
    method: "DELETE"
  })
    .then(()=>{
      location.reload()
    })
    .catch(()=>{
      alert("No se recibio respuesta del servidor")
    })
};

const favoriteMovie = (e)=>{
  fetch(urlMovies)
  .then(response=>response.json())
  .then(data=>data.forEach(element=>{
    fetch(`${urlMovies}/${element.id}`,{
      method:"PATCH",
      body: JSON.stringify({
        favorite: false
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      }
    })
    .then(()=>{
      fetch(`${urlMovies}/${e - 200}`,{
        method:"PATCH",
        body: JSON.stringify({
          favorite: true
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then(()=>{
        location.reload()
      })
    })
  }))
}  

window.addEventListener("load",()=>{
  fetch(urlMovies)
    .then(response => response.json())
    .then(data=>data.forEach((e)=>{
      e.favorite == true? document.getElementById(`${Number(200)+e.id}`).setAttribute("checked",""):document.getElementById(`${Number(200)+e.id}`).removeAttribute("checked","");
    }))
  fetch(`${urlUsers}/1`)
    .then(response => response.json())
    .then(data => {
     let user = data;
     localStorage.getItem("correo") == undefined? window.location = "http://127.0.0.1:5500/RollingCode---p2-Tarantino/index.html": "";
     localStorage.getItem("correo") != user.correo? window.location = "http://127.0.0.1:5500/RollingCode---p2-Tarantino/index.html": "";
  

    })
})

const volverInicio = () => {
  window.location = href="./homepage.html";
}