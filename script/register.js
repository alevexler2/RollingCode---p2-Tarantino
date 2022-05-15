const inputNombre = document.querySelector("#nombre");
const inputApellido = document.querySelector("#apellido");
const inputCorreo = document.querySelector("#correo");
const inputContraseña = document.querySelector("#contraseña");
const inputRevalidar = document.querySelector("#revalidar");
const btn = document.querySelector("#btnCrear");
const respuesta = document.querySelector("#respuesta");
const urlUsers = "http://localhost:3000/users";

btn.addEventListener("click", () => {
  if (inputNombre.value == "" || inputApellido.value == "" || inputCorreo.value == "" || inputContraseña.value == "" || inputRevalidar.value == "" ){
    return respuesta.innerHTML = "Todos los campos son obligatorios";
  } else if(inputContraseña.value.length < 8){
    return respuesta.innerHTML = "El largo de la contraseña debe ser igual o mayor que 8";
  } else if(inputContraseña.value !== inputRevalidar.value){
    return respuesta.innerHTML = "Las contraseñas deben coincidir";
  } else if (inputCorreo.value.includes("@")){
    fetch(urlUsers)
    .then(response => response.json())
    .then(data=>{
      let users = data.map(e => {
        return e.correo
      })
      let user = users.find(e => {
      return e == inputCorreo.value
    })
    if(user == inputCorreo.value){
      return respuesta.innerHTML = "El usuario ya existe";
    } else {
      fetch(urlUsers, {
        method: "POST",
        body: JSON.stringify({
          nombre: inputNombre.value,
          apellido: inputApellido.value,
          correo: inputCorreo.value,
          contraseña: inputContraseña.value,
          admin: false
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then(()=>{
        window.location = "http://127.0.0.1:5501/pages/addAcc.html";
      })
      .catch(()=>{
        window.location = 404
      })
    }
    })
  } else {
    return respuesta.innerHTML = "Ingrese un correo valido";
  }
});