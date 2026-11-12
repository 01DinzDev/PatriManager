const senha = document.querySelector('#senha');
const toggleSenha = document.querySelector('#toggleSenha');

if (senha && toggleSenha) {

    const iconeSenha = toggleSenha.querySelector('i');

    toggleSenha.addEventListener('click', () => {

        const mostrar = senha.type === 'password';

        senha.type = mostrar ? 'text' : 'password';

        iconeSenha.classList.toggle('fa-eye', !mostrar);
        iconeSenha.classList.toggle('fa-eye-slash', mostrar);

        toggleSenha.setAttribute(
            'aria-label',
            mostrar ? 'Ocultar senha' : 'Mostrar senha'
        );

        toggleSenha.setAttribute(
            'aria-pressed',
            String(mostrar)
        );

    });

}
