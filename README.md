# PatriManager

Sistema web para gerenciamento e controle de patrimônio.

## Sobre o projeto

O PatriManager é uma aplicação web criada para facilitar a organização e o controle de bens patrimoniais. O projeto está na versão **3.2** e está em desenvolvimento no front-end.

As páginas e a navegação já estão estruturadas. A integração com o banco de dados e algumas funcionalidades ainda serão desenvolvidas.

## Funcionalidades

- Página inicial com acesso ao login e cadastro.
- Cadastro de conta para demonstração.
- Login com usuário e senha.
- Dashboard com menu de navegação.
- Páginas de patrimônio, movimentações, manutenções e inventário.
- Páginas de localizações, relatórios, notificações, usuários e configurações.
- Popup de boas-vindas.
- Página de erro 404.
- Layout responsivo.

> Algumas páginas ainda possuem apenas a estrutura visual; suas funcionalidades serão desenvolvidas posteriormente.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- localStorage
- sessionStorage
- SVG e PNG

## Estrutura do projeto

```text
PatriManagerV3/
├── index.html
├── pages/
│   ├── entrar.html
│   ├── cadastre-se.html
│   ├── error404.html
│   └── dashbord-pages/
│       ├── home.html
│       ├── patrimonio.html
│       ├── movimentacoes.html
│       ├── manutencoes.html
│       ├── inventario.html
│       ├── localizacoes.html
│       ├── relatorios.html
│       ├── notificacoes.html
│       ├── usuarios.html
│       └── configuracoes.html
├── public/
│   └── assets/
└── src/
    ├── css/
    ├── js/
    └── utils/
```

- `pages/`: páginas HTML.
- `public/assets/`: imagens, logotipos e ícones.
- `src/css/`: estilos e responsividade.
- `src/js/`: scripts.
- `src/utils/`: funções auxiliares.

## Como executar o projeto

1. Baixe ou clone o repositório.
2. Abra a pasta no Visual Studio Code.
3. Execute o `index.html` com a extensão **Live Server**.
4. Acesse o login ou faça um cadastro.

## Login de demonstração

| Campo | Valor |
|---|---|
| Usuário | `admin` |
| Senha | `1000` |

Também é possível criar uma conta pela página de cadastro.

## Armazenamento de dados

Os dados de demonstração ficam armazenados no próprio navegador:

- `localStorage`: armazena a conta cadastrada.
- `sessionStorage`: mantém informações temporárias da sessão e do popup.

Nesta versão, os dados ainda não são enviados para um banco de dados.

## Responsividade

O PatriManager possui arquivos CSS dedicados à responsividade, permitindo que a interface se adapte a diferentes resoluções e dispositivos, como computadores, tablets e smartphones.

### Páginas principais

Cada uma das páginas abaixo possui um arquivo CSS específico para ajustar seu layout conforme o tamanho da tela.

| Página | Arquivo responsável |
|---|---|
| Página inicial (`index.html`) | `src/css/responsive/responsive.css` |
| Entrar (`entrar.html`) | `src/css/responsive/r_entrar.css` |
| Cadastre-se (`cadastre-se.html`) | `src/css/responsive/r_cadastre-se.css` |
| Error 404 (`error404.html`) | `src/css/responsive/r_error404.css` |

### Dashboard

As páginas internas do Dashboard compartilham um único arquivo de responsividade, responsável por adaptar os elementos da interface a diferentes tamanhos de tela.

**Arquivo responsável:**

`src/css/dashbord-style/responsive/responsive.css`

**Páginas atendidas:**
- `home.html`
- `patrimonio.html`
- `movimentacoes.html`
- `manutencoes.html`
- `inventario.html`
- `localizacoes.html`
- `relatorios.html`
- `notificacoes.html`
- `usuarios.html`
- `configuracoes.html`

### Organização dos arquivos

Os arquivos de responsividade ficam separados dos estilos principais, mantendo o código mais organizado e facilitando futuras alterações na interface.

Essa organização permite ajustar cada página individualmente ou aplicar adaptações compartilhadas entre as páginas do Dashboard.
## Próximas etapas

- [ 1 ] Implementar as funções do Dashboard.
- [ 2 ] Criar cadastro, edição, consulta e exclusão de patrimônios.
- [ 3 ] Desenvolver pesquisa por ID e pesquisa geral.
- [ 4 ] Implementar movimentações, manutenções e inventário.
- [ 5 ] Desenvolver relatórios e notificações.
- [ 6 ] Criar o back-end com Node.js.
- [ 7 ] Integrar o banco de dados MariaDB.
- [ 8 ] Implementar autenticação segura.

## Segurança

O login atual é apenas demonstrativo. As credenciais ficam no código ou no armazenamento do navegador e não oferecem segurança para uso em produção.

Antes de publicar o sistema, será necessário implementar autenticação e validação no servidor.



# Histórico de versões — PatriManager

## PatriManager V1
**Versão:** 0.1.1  
**Status:** Finalizada

> **Descrição:** Etapa inicial dedicada ao planejamento das páginas e à criação da estrutura base do projeto, estabelecendo a organização dos arquivos e iniciando o desenvolvimento das primeiras interfaces.

---

## PatriManager V2
**Versão:** 0.2.1  
**Status:** Finalizada

> **Descrição:** Implementação do sistema de autenticação, permitindo o acesso por meio de usuário e senha. Também foi desenvolvida a funcionalidade de cadastro de novas contas.

> **Credenciais padrão:**
> - **Usuário:** `admin`
> - **Senha:** `1000`

---

## PatriManager V2
**Versão:** 0.2.2  
**Status:** Finalizada

> **Descrição:** Criação da página [Error 404](pages/error404.html), utilizada para representar páginas ainda não implementadas, evitando links sem destino e melhorando a experiência de navegação.

---

## PatriManager V2
**Versão:** 0.2.3  
**Status:** Finalizada

> **Descrição:** Implementação da responsividade nas páginas [Entrar](pages/entrar.html), [Cadastre-se](pages/cadastre-se.html) e [Error 404](pages/error404.html), adaptando a interface para dispositivos móveis e tablets. Também foi desenvolvida a página principal do Dashboard.

---

## PatriManager V2
**Versão:** 0.2.4  
**Status:** Finalizada

> **Descrição:** Remodelação das páginas do sistema, com melhorias no layout e na identidade visual, buscando proporcionar uma interface mais moderna, elegante e intuitiva.

---

## PatriManager V3
**Versão:** 0.3.1  
**Status:** Finalizada

> **Descrição:** Desenvolvimento do Dashboard, incluindo a criação de suas páginas, ícones e identidade visual. Também foi implementada a responsividade para dispositivos móveis, tablets e desktops, além do planejamento do futuro sistema de pesquisa por ID.

---

## PatriManager V3
**Versão:** 0.3.2  
**Status:** Em desenvolvimento

> **Descrição:** Versão atualmente em desenvolvimento, dando continuidade à evolução do sistema e à implementação de novas funcionalidades.
---
#### Agradecimentos

Agradeço à **Digital College** pela formação em Desenvolvimento Full Stack.
