const bgTarantino = document.querySelector(".bgTarantino");
setTimeout(() => {
  bgTarantino.innerHTML = `<section class="container animate__animated animate__fadeIn" id="loginContainer">
  <div class="d-flex justify-content-center align-items-center containerLogin mb-0 flex-column ">
    <h1 class="text-white d-flex justify-content-center align-items-end logoStyle">Tarantino</h1>
    <form>
      <div class="mb-3">
        <input type="text" class="form-control inputStyle" id="inputUser" placeholder="Usuario o Email" required>
      </div>
      <div class="mb-3">
        <input type="password" class="form-control inputStyle" id="inputPass" placeholder="Contraseña" required>
      </div>
    </form>
    <div class="d-flex">
      <button type="button" class="btn btn-primary m-1 btnTarantino" id="btnLogin">INGRESAR</button>
      <a href="./pages/register.html"><button type="button" class="btn btn-primary m-1 btnTarantino" id="btnLogin">REGISTRO</button></a>
    </div>
  </div>    
</section>`;
const inputUser = document.querySelector("#inputUser");
const inputPass = document.querySelector("#inputPass");
const btnLogin = document.querySelector("#btnLogin");
const user = "alejandro";
const pass = "12345678";

btnLogin.addEventListener("click", () => {
  if (inputUser.value == "" || inputPass.value == "") {
    alert("el usuario o la contraseña no pueden estar vacios");
  } else if (inputUser.value == user && inputPass.value == pass) {
    window.location = "http://127.0.0.1:5500/pages/loadLogin.html";
  } else {
    alert("el usuario o la contraseña son incorrectos");
  }
});
}, 3000);


