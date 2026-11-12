const autenticacaoService = {
    async login(login, senha) {

        const resposta = await fetch('/api/auth/login', {

            method: 'POST',

            headers: {
                'Content-Type': 'application/json'
            },

            credentials: 'include',

            body: JSON.stringify({
                login,
                senha
            })

        });

        const dados = await resposta.json();

        if (!resposta.ok) {
            throw new Error(
                dados.mensagem || 'Não foi possível realizar o login.'
            );
        }

        return dados;

    },
    async verificarSessao() {

        const resposta = await fetch('/api/auth/me', {
            credentials: 'include'
        });

        if (!resposta.ok) {
            return null;
        }

        const dados = await resposta.json();

        return dados.usuario;

    },
    async logout() {

        const resposta = await fetch('/api/auth/logout', {
            method: 'POST',
            credentials: 'include'
        });

        if (!resposta.ok) {
            throw new Error('Não foi possível encerrar a sessão.');
        }

        return true;
    }
};
