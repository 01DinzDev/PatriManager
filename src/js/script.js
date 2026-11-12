// Att : envio do formulário.
const formulario = document.querySelector('#formLogin');
const mensagem = document.querySelector('#mensagemLogin');
const btnLogin = document.querySelector('#btnLogin');

if (formulario) {

    formulario.addEventListener('submit', async (event) => {

        event.preventDefault();

        const login = document.querySelector('#login').value.trim();
        const senha = document.querySelector('#senha').value;

        mensagem.textContent = '';
        btnLogin.disabled = true;
        btnLogin.textContent = 'Entrando...';

        try {

            const dados = await autenticacaoService.login(
                login,
                senha
            );

            mensagem.textContent = dados.mensagem;
            mensagem.style.color = 'green';

            // Redirecionar para o dashboard quando ele estiver criado.
            // window.location.href = '../dashboard.html';

        } catch (erro) {

            mensagem.textContent = erro.message;
            mensagem.style.color = 'red';

        } finally {

            btnLogin.disabled = false;
            btnLogin.textContent = 'Entrar';

        }

    });

}
