const formLogin = document.getElementById("formLogin");

const usuarioPadrao = "admin";
const senhaPadrao = "1000";

formLogin.addEventListener("submit", function (event) {
    event.preventDefault();

    const usuario = document.getElementById("usuario").value.trim();
    const senha = document.getElementById("senha").value;
    const contaSalva = JSON.parse(localStorage.getItem("contaPatriManager"));

    const loginPadrao = usuario === usuarioPadrao && senha === senhaPadrao;
    const loginCadastrado = contaSalva && usuario === contaSalva.usuario && senha === contaSalva.senha;

    if (loginPadrao || loginCadastrado) {
        sessionStorage.setItem("usuarioLogado", usuario);
        sessionStorage.setItem("loginSucesso", "true");

        window.location.href = "/pages/dashbord-pages/home.html";
        return;
    }

    alert("Usuário ou senha incorretos!");
});