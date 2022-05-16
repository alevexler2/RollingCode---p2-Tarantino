const bgTarantino = document.querySelector(".bgTarantino");
const urlUsers = "http://localhost:3000/users";
setTimeout(() => {
  bgTarantino.innerHTML = 
  `<section class="container animate__animated animate__fadeIn" id="loginContainer">
    <div class="d-flex justify-content-center align-items-center containerLogin mb-0 flex-column">
      <h1 class="text-white d-flex justify-content-center align-items-end logoStyle">Tarantino</h1>
      <small class="container text-center d-flex justify-content-center mb-1 text-secondary col-8 col-sm-5 col-md-4 col-lg-10" id="respuesta"></small>
      <div class="container mb-3 col-8 col-sm-6 col-md-5 col-xl-4 col-xxl-3">
        <input type="email" class="form-control mb-3 border-0 casilla-registro" id="inputUser" placeholder="correo" maxlength="35" required/>
        <input type="password" class="form-control mb-1 border-0 casilla-registro" id="inputPass" placeholder="contraseña" maxlength="15" required/>
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
    if (inputUser.value == "" || inputPass.value == "") {
      return respuesta.innerHTML = "El correo o la contraseña no pueden estar vacíos";
    } else {
      fetch(urlUsers)
      .then(response => response.json())
      .then(data => {
        let users = data.map(e =>{return e.correo})
        let passwords = data.map(e =>{return e.contraseña})
        let user = users.find(e =>{return e ==  inputUser.value})
        let pass = passwords.find(e =>{return e ==  inputPass.value})
        if(user != inputUser.value || pass != inputPass.value){
          return respuesta.innerHTML = "El usuario o la contraseña son incorectos";
        } else {
          localStorage.setItem("contraseña", inputPass.value);
          localStorage.setItem("correo", inputUser.value);
          bgTarantino.innerHTML = 
          `<div class="container-fluid d-flex justify-content-center animate__animated animate__fadeIn">
            <div class="row">
              <h1 class="text-white d-flex justify-content-center align-items-end mb-2 logoStyle">Tarantino</h1>
              <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
              <lottie-player class="spinLoad" src="https://assets3.lottiefiles.com/private_files/lf30_4pdkhaet.json" speed="1" loop autoplay></lottie-player>
            </div>
          </div>`;
          setTimeout(()=>{
            window.location = "http://127.0.0.1:5500/RollingCode---p2-Tarantino/pages/homepage.html";
          },5000)
        }
      })      
  }})
  const btnRecuperar = document.querySelector("#btnRecuperar");
  const inputRec = document.querySelector("#inputRec"); 
  const recRespuesta = document.querySelector("#recRespuesta"); 
  
  btnRecuperar.addEventListener("click", () => {
      fetch("http://localhost:3000/users/")
      .then((response) => response.json())
      .then((response) => {
        let users = response.map(e => {return e.correo})
        let user = users.find(e => {return e == inputRec.value})
        user == inputRec.value? recRespuesta.innerHTML = "Los pasos para recuperar su contraseña fueron enviadas a su Email": recRespuesta.innerHTML = "El Email ingresado no se encontro en nuestra base de datos";
      });
  });
}, 2050);

window.addEventListener("load", ()=>{
  localStorage.clear();
})