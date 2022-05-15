const urlMovies = "http://localhost:3000/movies";
const urlUsers = "http://localhost:3000/users";

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

const moveToCategory = (e)=>{
if(e == "accion"){
  console.log("redireccionar a categoria accion");
} else {
  alert("la categoria no existe")
}
  console.log(document.getElementById(e));
}

window.addEventListener("load", ()=>{
  localStorage.setItem("correo", "ale@gmail.com");
  localStorage.setItem("contraseña", "123456")
  fetch(urlUsers)
    .then(response=>response.json())
    .then(data=>data.forEach(e => {
      let usuario;
      if(localStorage.getItem("contraseña") == e.contraseña){
       usuario = e.administrador
      } else {
      window.location = "https://www.google.com/?&bih=973&biw=1920&hl=es-419"
      }
      console.log(usuario);
      usuario == false? adminLink.classList.add("d-none"): adminLink.classList.remove("d-none");
    }))
  
  // if(sessionStorage.getItem("correo") == "" || sessionStorage.getItem("contraseña") == "" ){
  //   window.location = "https://www.google.com/?&bih=973&biw=1920&hl=es-419"
  // }
  // const adminLink = document.querySelector("#adminLink");
  
  // sessionStorage.getItem("admin") !== "true"? adminLink.classList.add("d-none"): adminLink.classList.remove("d-none");
    
})
