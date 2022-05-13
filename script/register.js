const inputNombre = document.querySelector("#nombre");
const inputApellido = document.querySelector("#apellido");
const inputCorreo = document.querySelector("#correo");
const inputContraseña = document.querySelector("#contraseña");
const inputRevalidar = document.querySelector("#revalidar");
const btn = document.querySelector("#btnCrear");
const respuesta = document.querySelector("#respuesta");
btn.addEventListener("click", () => {
  if (inputNombre.value != "" && inputApellido.value != "" && inputCorreo.value != "" && inputContraseña.value != "" && inputRevalidar.value != "") {
    if (inputCorreo.value.includes("@")) {
      fetch('http://localhost:3000/users/')
      .then((response) => response.json())
      .then((response) => {
        if (response.length == 0) {
          if (inputContraseña.value == inputRevalidar.value) {
            fetch("http://localhost:3000/users/", {
              method: "POST",
              body: JSON.stringify({
                nombre: inputNombre.value,
                apellido: inputApellido.value,
                correo: inputCorreo.value,
                contraseña: inputContraseña.value,
                admin: false,
              }),
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            });
            window.location = "http://127.0.0.1:5500/pages/addAcc.html";
          } else {
            return respuesta.innerHTML = "Las contraseñas deben coincidir";
          }
        } else {
          response.forEach(element => {
            if (inputCorreo.value != element.correo) {
              if (inputContraseña.value == inputRevalidar.value) {
                fetch("http://localhost:3000/users/", {
                  method: "POST",
                  body: JSON.stringify({
                    nombre: inputNombre.value,
                    apellido: inputApellido.value,
                    correo: inputCorreo.value,
                    contraseña: inputContraseña.value,
                    admin: false,
                  }),
                  headers: {
                    "Content-type": "application/json; charset=UTF-8",
                  },
                });
                window.location = "http://127.0.0.1:5501/pages/addAcc.html";
              } else {
                return respuesta.innerHTML = "Las contraseñas deben coincidir";
              }
            } else {
              return respuesta.innerHTML = "El correo ya existe";
            }
          });
        }
      });
    } else {
      return respuesta.innerHTML = "Ingrese un correo válido";
    }
  } else {
    return respuesta.innerHTML = "Todos los campos son obligatorios";
  }
});