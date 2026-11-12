# PatriManager

Sistema web de gerenciamento e controle de patrimônio, desenvolvido para centralizar informações sobre bens, responsáveis, setores e movimentações.

## Sobre o projeto

O **PatriManager** tem como objetivo facilitar o cadastro, a consulta e o acompanhamento dos bens patrimoniais, incluindo manutenções e baixas.

O desenvolvimento atual está concentrado no **frontend com HTML, CSS e JavaScript**. A integração com uma API e um banco de dados é uma próxima etapa do projeto.

> As telas e interações do frontend não representam, por si só, autenticação segura ou persistência dos dados em um banco.

## Interface em desenvolvimento

- Página inicial de apresentação do sistema.
- Página de login.
- Dashboard com indicadores, atalhos e atividades recentes.
- Exibição do nome do usuário no dashboard.
- Área de notificações e atividades.
- Layout responsivo para computadores, tablets e celulares.

## Funcionalidades planejadas

- [ ] Cadastro, listagem, consulta e edição de patrimônios.
- [ ] Gerenciamento de pessoas responsáveis e setores.
- [ ] Registro de movimentações entre setores e responsáveis.
- [ ] Acompanhamento de manutenções.
- [ ] Registro de baixas patrimoniais.
- [ ] Relatórios e indicadores com dados reais.
- [ ] Autenticação e autorização no backend.
- [ ] Integração com banco de dados.
- [ ] Validação e tratamento de erros nas operações da API.

## Tecnologias

| Área | Tecnologias | Etapa |
|---|---|---|
| Interface | HTML5, CSS3 e JavaScript | Desenvolvimento atual |
| Backend | Node.js e Express | Planejado |
| Banco de dados | MySQL | Planejado |
| Versionamento | Git e GitHub | Organização do código |

## Como executar o frontend

1. Clone o repositório, substituindo o endereço de exemplo pelo endereço real:

   ```bash
   git clone URL_DO_REPOSITORIO PatriManager
   cd PatriManager
   ```

2. Abra a pasta do projeto no Visual Studio Code.
3. Abra a página inicial com um servidor local, como a extensão **Live Server**.
4. Navegue pelas páginas para visualizar a interface e testar as interações disponíveis.

Para visualizar o frontend estático, não é necessário configurar o MySQL nem executar `npm install`.

Os comandos `npm install` e `npm start` serão aplicáveis ao backend quando as dependências e os scripts estiverem definidos no `package.json`.

## Organização sugerida do código

| Local | Responsabilidade |
|---|---|
| Páginas HTML | Estrutura das telas e formulários |
| `public/assets/` | Imagens, logos e ícones |
| `src/css/` | Estilos e regras de responsividade |
| `src/js/` | Interações e comportamento das páginas |
| `services/` | Funções para comunicação com a futura API |
| `utils/` | Funções auxiliares reutilizáveis |

Essa organização serve como referência para a evolução do projeto. Os caminhos de `services/` e `utils/` devem acompanhar a estrutura adotada para os arquivos JavaScript.

## Próximas etapas de integração

1. Criar o servidor com Node.js e Express.
2. Modelar o banco de dados para usuários, patrimônios, setores, responsáveis, movimentações e manutenções.
3. Implementar as rotas da API para consultar, cadastrar e atualizar registros.
4. Adicionar autenticação, controle de acesso e validação dos dados no servidor.
5. Conectar os formulários e as listagens à API por meio dos serviços JavaScript.
6. Substituir os dados demonstrativos por dados retornados pelo backend.
7. Testar os fluxos de login, cadastro, edição, movimentação e baixa.

### Configuração futura do ambiente

Quando o backend estiver implementado, suas variáveis de ambiente poderão seguir este modelo:

```env
DB_HOST=localhost
DB_USER=usuario_da_aplicacao
DB_PASSWORD=sua_senha
DB_NAME=patri_manager
PORT=3000
```

As credenciais devem ficar no ambiente do servidor. O frontend acessará a API, sem conexão direta com o banco de dados.

Mantenha o arquivo `.env` fora do versionamento. Um `.env.example` pode documentar os campos necessários, sem credenciais reais.

Exemplo de entradas para o `.gitignore`:

```gitignore
node_modules/
.env
.env.*
!.env.example
```

## Organização do desenvolvimento

Fluxo de branches proposto para o projeto:

| Branch | Finalidade |
|---|---|
| `main` | Versão estável |
| `develop` | Integração das funcionalidades em desenvolvimento |
| `feature/*` | Novas funcionalidades |
| `fix/*` | Correções de problemas |

Se a branch `develop` já existir, uma nova funcionalidade pode começar assim:

```bash
git checkout develop
git pull origin develop
git checkout -b feature/patrimonio
```

### Padrão de commits

Use mensagens curtas que descrevam a alteração realizada. Os exemplos abaixo estão em inglês.

| Prefixo | Utilização |
|---|---|
| `feat` | Nova funcionalidade ou tela |
| `fix` | Correção de comportamento ou aparência |
| `style` | Formatação do código, como indentação e espaçamento |
| `refactor` | Reorganização sem alterar o comportamento |
| `docs` | Alterações na documentação |
| `chore` | Configurações e manutenção do projeto |

```bash
git commit -m "feat: add asset management page"
git commit -m "feat: add responsive dashboard layout"
git commit -m "fix: adjust home and login pages"
git commit -m "style: format HTML and CSS files"
git commit -m "docs: update project README"
```

Alterações em CSS devem usar o prefixo que descreve sua finalidade: `feat` para um recurso novo, `fix` para uma correção e `style` para formatação do código.

## Objetivo

Entregar uma aplicação organizada e responsiva, com integração futura ao backend e ao banco de dados, para tornar o controle patrimonial mais simples e centralizado.

---

**PatriManager** — Gerenciamento e controle de patrimônio.
