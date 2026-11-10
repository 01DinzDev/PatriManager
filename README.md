# PatriManager

Sistema de gerenciamento e controle de patrimônio.

## Sobre o projeto

O **PatriManager** é um sistema desenvolvido para facilitar o gerenciamento, o acompanhamento e o controle de bens patrimoniais.

A proposta é centralizar as informações dos patrimônios, permitindo o cadastro, a consulta, a edição e o acompanhamento de movimentações, manutenções e baixas.

## Funcionalidades previstas

- [x] Estrutura inicial do projeto
- [ ] Dashboard com indicadores
- [ ] Cadastro de patrimônios
- [ ] Listagem e consulta de patrimônios
- [ ] Edição de patrimônios
- [ ] Gerenciamento de pessoas responsáveis
- [ ] Gerenciamento de setores
- [ ] Controle de movimentações
- [ ] Registro de manutenções
- [ ] Controle de baixas patrimoniais
- [ ] Relatórios
- [ ] Sistema de autenticação
- [ ] Integração com banco de dados

## Tecnologias utilizadas

### Frontend
- HTML5
- CSS3
- JavaScript

### Backend
- Node.js
- Express

### Banco de dados
- MySQL

### Versionamento
- Git
- GitHub

## Instalação e execução

### 1. Clonar o repositório

```bash
git clone URL_DO_REPOSITORIO
```

### 2. Entrar na pasta do projeto

```bash
cd PatriManager
```

### 3. Instalar as dependências

```bash
npm install
```

Caso as dependências ainda não estejam configuradas:

```bash
npm install express mysql2 dotenv bcrypt
```

### 4. Configurar as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=patri_manager
PORT=3000
```

Não compartilhe esse arquivo nem envie suas credenciais para o GitHub.

### 5. Executar o projeto

```bash
npm start
```

A configuração do script `start` e do servidor deverá estar implementada no `package.json` e no backend.

## Organização do desenvolvimento

O projeto utiliza o Git Flow para organizar o desenvolvimento.

| Branch | Finalidade |
|---|---|
| `main` | Versão estável do projeto |
| `develop` | Integração das funcionalidades |
| `feature/*` | Desenvolvimento de novas funcionalidades |
| `fix/*` | Correção de problemas |

### Exemplo de criação de uma branch

```bash
git checkout develop
git pull origin develop
git checkout -b feature/patrimonio
```

### Padrão de commits

| Prefixo | Utilização |
|---|---|
| `feat` | Nova funcionalidade |
| `fix` | Correção de erros |
| `style` | Alterações visuais e formatação |
| `refactor` | Reorganização do código |
| `docs` | Documentação |
| `chore` | Configurações e manutenção |

Exemplos:

```bash
git commit -m "feat: cria página de patrimônio"
git commit -m "style: adiciona responsividade ao dashboard"
git commit -m "fix: corrige navegação entre páginas"
git commit -m "docs: atualiza documentação do projeto"
```

## Objetivo

Desenvolver uma aplicação organizada, responsiva e preparada para integração com banco de dados, oferecendo maior controle sobre os bens patrimoniais e suas movimentações.

---

**PatriManager** — Gerenciamento e controle de patrimônio.
