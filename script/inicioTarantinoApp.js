const bgTarantino = document.querySelector(".bgTarantino");
setTimeout(() => {
  bgTarantino.innerHTML = 
  `<section class="container animate__animated animate__fadeIn" id="loginContainer">
    <div class="d-flex justify-content-center align-items-center containerLogin mb-0 flex-column">
      <h1 class="text-white d-flex justify-content-center align-items-end logoStyle">Tarantino</h1>
      <small class="container text-center d-flex justify-content-center mb-1 text-secondary col-8 col-sm-5 col-md-4 col-lg-10" id="respuesta"></small>
      <div class="container mb-3 col-8 col-sm-6 col-md-5 col-xl-4 col-xxl-3">
        <input type="email" class="form-control mb-3 border-0 casilla-registro" id="inputUser" placeholder="correo" required/>
        <input type="password" class="form-control mb-1 border-0 casilla-registro" id="inputPass" placeholder="contraseña" required/>
        <small><a type="button" class="text-secondary d-flex justify-content-end text-decoration-none px-3" data-bs-toggle="modal" data-bs-target="#modalPass">¿Olvidaste tu contraseña?</a></small>
      </div>
      <div class="row d-flex justify-content-center">
        <button type="button" class="btn m-1 col-6 btnTarantino" id="btnLogin">ENTRAR</button>
        <small class="text-center mt-3 text-secondary">¿Primera vez en Tarantino?</small>
        <a class="text-white text-center text-decoration-none fs-6" href="./pages/register.html">Suscríbete ahora</a>
      </div>
    </div>
  </section>
  <div class="modal fade modalWindow" id="modalPass">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header border-0">
          <h5 class="modal-title">RECUPERAR CONTRASEÑA</h5>
        </div>
        <div class="modal-body border-0">
          <input class="form-control casilla-registro" type="email" placeholder="correo" id="inputRec"/>
          <small class="container my-1 text-secondary" id="recRespuesta"></small>
        </div>
        <div class="modal-footer border-0">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
          <button type="button" class="btn btnTarantino" id="btnRecuperar">RECUPERAR</button>
        </div>
      </div>
    </div>
  </div>`;
  const inputUser = document.querySelector("#inputUser");
  const inputPass = document.querySelector("#inputPass");
  const btnLogin = document.querySelector("#btnLogin");
  const respuesta = document.querySelector("#respuesta");
  btnLogin.addEventListener("click", () => {
    if (inputUser.value != "" && inputPass.value != "") {
      fetch("http://localhost:3000/users/")
      .then((response) => response.json())
      .then((response) => {
        if (response.length != 0) {
          response.forEach(element => {
            if (inputUser.value == element.correo) {
              if (inputPass.value == element.contraseña) {
                /* agregar validación para que guarde en el localStorage user y pass así recién pueda entrar a la home page */
                const loadLog = document.querySelector(".bgTarantino");
                loadLog.innerHTML = 
                `<div class="container-fluid d-flex justify-content-center animate__animated animate__fadeIn">
                  <div class="row">
                    <h1 class="text-white d-flex justify-content-center align-items-end mb-2 logoStyle">Tarantino</h1>
                    <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
                    <lottie-player class="spinLoad" src="https://assets3.lottiefiles.com/private_files/lf30_4pdkhaet.json" speed="1" loop autoplay></lottie-player>
                  </div>
                </div>`;
                setTimeout(() => {
                  window.location = "http://127.0.0.1:5500/index.html";
                }, 5000);
              } else {
                return respuesta.innerHTML = "La contraseña es incorrecta";
              }
            } else {
              return respuesta.innerHTML = "El correo es incorrecto";
            }
          });
        } else {
          return respuesta.innerHTML = "Cree una cuenta para continuar";
        }
      });
    } else {
      return respuesta.innerHTML = "El correo o la contraseña no pueden estar vacíos";
    }
  });
  const btnRecuperar = document.querySelector("#btnRecuperar");
  const inputRec = document.querySelector("#inputRec"); 
  btnRecuperar.addEventListener("click", () => {
    if (inputRec.value != "") {
      fetch("http://localhost:3000/users/")
      .then((response) => response.json())
      .then((response) => {
        response.forEach(element => {
          if (inputRec.value == element.correo) {
            return recRespuesta.innerHTML = `su contraseña es: <b>${element.contraseña}</b>`;
          } else {
            return recRespuesta.innerHTML = "No se ha encontrado el correo";
          }
        });
      });
    } else {
      return recRespuesta.innerHTML = "Ingrese el correo que desea recuperar";      
    }
  });
}, 2050);