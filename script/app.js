const indexContainer = document.querySelector("#loginContainer");
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

window.addEventListener("load", () => {
  window.location == "http://127.0.0.1:5500/pages/loadLogin.html"? setTimeout(() => {window.location = "http://127.0.0.1:5500/index.html";}, 1500): "";
});

