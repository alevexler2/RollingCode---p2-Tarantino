const btnPost = document.querySelector("#btnPost");
const trBody = document.querySelector("#trBody");
const urlMovies = "http://localhost:3000/movies";
const checkbox = document.querySelector("#checkbox");

btnPost.addEventListener("click",()=>{
  checkbox.checked? checkbox.value = "publicada" : checkbox.value = "No publicada";
if(document.querySelector("#titleMovie").value == "" || document.querySelector("#yearMovie").value == "" 
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
                    <div class="modal-content addMovieModal p-5 bgTarantino">
                      <input type="text" class="m-2" placeholder="title" id="editTitleMovie">
                      <input type="text" class="m-2" placeholder="year" id="editYearMovie">
                      <input type="text" class="m-2" placeholder="rated" id="editRatedMovie">
                      <input type="text" class="m-2" placeholder="Runtime" id="editRuntimeMovie">
                      <input type="text" class="m-2" placeholder="director" id="editDirectorMovie">
                      <input type="text" class="m-2" placeholder="Writer" id="editWriterMovie">
                      <input type="text" class="m-2" placeholder="Actors" id="editActorsMovie">
                      <input type="text" class="m-2" placeholder="category" id="editCategoryMovie">
                      <input type="text" class="m-2" placeholder="Language" id="editLanguageMovie">
                      <input type="text" class="m-2" placeholder="synopsis" id="editSynopsisMovie">
                      <input type="text" class="m-2" placeholder="imdbRating" id="editImdbRatingMovie">
                      <input type="text" class="m-2" placeholder="image" id="editImageMovie">
                      <input type="text" class="m-2" placeholder="urlEspañol" id="editUrlEspañolMovie">
                      <input type="text" class="m-2" placeholder="urlIngles" id="editUrlInglesMovie">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="editCheckbox">
                        <label class="form-check-label" for="checkbox">Publicar</label>
                      </div>
                      <button type="submit" class="btn btn-primary btnEdit" id="editBtn" onclick="btnPut(id)">Editar</button>
                    </div>
                  </div>
                </div>
              </div>
            </td>
            <td><button class="btn btn-primary m-1 btnTarantino text-center btnDelete" id="100${e.id}" onclick="btnDelete(id)">Eliminar</button></td>
            <td>
              <div class="form-check">
                <input class="form-check-input " type="checkbox" id="200${e.id}" onclick="favoriteMovie(id)">
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
  fetch(`${urlMovies}/${parseInt(e)-1000}`,{
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
        favorite: "false"
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      }
    })
    .then(()=>{
      fetch(`${urlMovies}/${parseInt(e)-2000}`,{
        method:"PATCH",
        body: JSON.stringify({
          favorite: "true"
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
      e.favorite == "true"? document.getElementById(`200${e.id}`).setAttribute("checked",""):document.getElementById(`200${e.id}`).removeAttribute("checked","");
      console.log(document.getElementById(`200${e.id}`));
    }))
})







