const cardContainer = document.querySelector("#container");
const urlMovies = "http://localhost:3000/movies";
const urlUsers = "http://localhost:3000/users";
const linkAdmin = document.querySelector("#adminLink");
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
      localStorage.getItem("correo") == null? window.location = "http://127.0.0.1:5500/index.html": "";
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

window.addEventListener("load", ()=> {
  fetch(urlMovies)
    .then(response => response.json())
    .then(data => data.forEach(e=>{
      console.log(e);
      cardContainer.innerHTML += 
      `<div class="team_member">
			   <div class="member_img">
				   <img src="${e.image}" alt="${e.title}" class="foto_member">
				 </div>
				 <h3 class="nom_somos text-white">${e.title}</h3>
				 <p class="info_somos text-white">${e.synopsis}
      </div>`
    }))
})


