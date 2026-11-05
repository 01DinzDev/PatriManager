
const popupEntrada = document.getElementById("popupEntrada");
const fecharPopup = document.getElementById("fecharPopup");
const continuarPopup = document.getElementById("continuarPopup");
const nomeUsuario = document.getElementById("nomeUsuario");

const usuarioLogado = sessionStorage.getItem("usuarioLogado");
const loginSucesso = sessionStorage.getItem("loginSucesso");

if (loginSucesso === "true") {
    nomeUsuario.textContent = usuarioLogado;
    popupEntrada.style.display = "flex";

    sessionStorage.removeItem("loginSucesso");
} else {
    popupEntrada.style.display = "none";
}
function fechar() {
    popupEntrada.style.display = "none";
}
fecharPopup.addEventListener("click", fechar);
continuarPopup.addEventListener("click", fechar);

popupEntrada.addEventListener("click", function (event) {
    if (event.target === popupEntrada) {
        fechar();
    }
});