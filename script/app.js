const loginContainer = document.querySelector("#loginContainer");
const inputUser = document.querySelector("#inputUser");
const inputPass = document.querySelector("#inputPass");
const btnLogin = document.querySelector("#btnLogin");
const registerPass = document.querySelector("#registerPass");
const registerUser = document.querySelector("#registerUser");
const btnRegister = document.querySelector("#btnRegister");

btnRegister.addEventListener("click", () => {
  window.localStorage.setItem("password", registerPass.value);
  window.localStorage.setItem("user", registerUser.value);
  console.log(window.localStorage.getItem("password"));
  console.log(window.localStorage.getItem("user"));
});

btnLogin.addEventListener("click", () => {
  console.log("estoy haciendo click");
  if (inputPass.value == window.localStorage.getItem("password") && inputUser.value == window.localStorage.getItem("user")) {
    loginContainer.innerHTML = "load";
    setTimeout(() => {
      loginContainer.innerHTML = "ya ingresaste";
    }, 2000);
  } else {
    alert("la contraseña o el usuario son incorrectos");
  }
});
