const contraseña = document.getElementById("contraseña");
const revalidar = document.getElementById("revalidar");
const respuesta = respuesta.innerHTML;

function validarContraseña () {
if (contraseña==revalidar){
    return "";
}else {
    return respuesta.innerHTML = "Las contraseñas deben coincidir";
};
}