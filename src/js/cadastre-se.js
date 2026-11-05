const formCadastro = document.getElementById("formCadastro");

formCadastro.addEventListener("submit", function (event) {
    event.preventDefault();

    const usuario = document.getElementById("usuario").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;
    const senhaConfirma = document.getElementById("senhaConfirma").value;

    if (senha !== senhaConfirma) {
        alert("As senhas não coincidem!");
        return;
    }

    const conta = {
        usuario: usuario,
        email: email,
        senha: senha
    };

    localStorage.setItem("contaPatriManager", JSON.stringify(conta));

    alert("Conta cadastrada com sucesso!");
    window.location.href = "entrar.html";
});
