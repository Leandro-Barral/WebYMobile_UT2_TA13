const texto = document.getElementById("texto");
const btnCambiarTexto = document.getElementById("cambiarTexto");

btnCambiarTexto.addEventListener("click", () => {
    texto.innerHTML = "Texto Cambiado";
})