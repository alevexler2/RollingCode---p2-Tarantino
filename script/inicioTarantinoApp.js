const bgTarantino = document.querySelector(".bgTarantino");
setTimeout(() => {
  bgTarantino.innerHTML = `<section class="container animate__animated animate__fadeIn" id="loginContainer">
  <div class="d-flex justify-content-center align-items-center containerLogin mb-0 flex-column">
    <h1 class="text-white d-flex justify-content-center align-items-end logoStyle">Tarantino</h1>
    <small class="container text-center d-flex justify-content-center mb-1 col-8 col-sm-5 col-md-4 col-lg-10 txtGris" id="respuesta"></small>
    <div class="container col-8 col-sm-6 col-md-5 col-xl-4 col-xxl-3">
      <input type="text" class="form-control mb-3 border-0 casilla-registro" id="inputUser" placeholder="correo" required/>
      <input type="password" class="form-control mb-3 border-0 casilla-registro" id="inputPass" placeholder="contraseña" required/>
    </div>
    <div class="row d-flex justify-content-center">
      <button type="button" class="btn m-1 col-6 btnTarantino" id="btnLogin">ENTRAR</button>
      <small class="text-center mt-3 txtGris">¿Primera vez en Tarantino?<br><a class="text-white text-decoration-none fs-6" href="./pages/register.html">Suscríbete ahora</a>
    </div>
  </div>    
</section>`;
const inputUser = document.querySelector("#inputUser");
const inputPass = document.querySelector("#inputPass");
const btnLogin = document.querySelector("#btnLogin");
const respuesta = document.querySelector("#respuesta");
btnLogin.addEventListener("click", () => {
  fetch('http://localhost:3000/users/')
    .then((response) => response.json())
    .then((response) => response.forEach(element => {
      if (inputUser.value != "" && inputPass.value != "") {
        if (inputUser.value == element.correo && inputPass.value == element.contraseña) {
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
          return respuesta.innerHTML = "El correo o la contraseña son incorrectos";
        }
      } else {
        return respuesta.innerHTML = "El correo o la contraseña no pueden estar vacíos";
      }
    }));
  });
}, 2050);