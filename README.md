# Sobre o Projeto

Este projeto é um site institucional desenvolvido para a Intera, com as páginas **Blog** e **Projetos** alimentadas dinamicamente.

O site é dividido em seções como:
- Início
- Quem Somos
- Serviços
- Projetos
- Blog
- Contato

O projeto está sendo construído com **React + Vite** no frontend, **Node.js + Express** no backend, e integração com a **Notion API** como fonte de dados.


## Instalação

### Pré-requisitos
  Node.Js
  npm

### Clonar o repositório

git clone https://github.com/MattosJ/new.git


### Entrando na pasta do projeto
cd site_intera-em-producao-dev-novo

### Back-End
cd back-end
npm install
npm run dev

### Front-end
Na pasta geral do projeto
npm install 
npm run dev


## Estrutura do Projeto

site_intera-em-producao-dev-novo/
├── back-end/ # Backend com Node.js e Express
│ ├── node_modules/ # Dependências do backend
│ ├── src/ # Código-fonte backend (rotas, controladores, serviços)
│ ├── .env # Variáveis de ambiente do backend
│ ├── package-lock.json # Lockfile npm backend
│ ├── package.json # Configurações e scripts backend
│ └── tsconfig.json # Configuração TypeScript backend
├── dist/ # Build final do frontend
├── node_modules/ # Dependências do frontend
├── public/ # Arquivos públicos do frontend (ícones, imagens estáticas)
├── src/ # Código-fonte frontend (React, componentes, páginas)
├── .env # Variáveis de ambiente do frontend
├── .gitattributes # Configurações Git
├── .gitignore # Arquivos ignorados pelo Git
├── eslint.config.js # Configuração ESLint
├── index.html # HTML principal do frontend
├── package-lock.json # Lockfile npm frontend
├── package.json # Configurações e scripts frontend
├── README.md # Documentação do projeto
├── tsconfig.app.json # Configuração TypeScript frontend
├── tsconfig.json # Configuração geral TypeScript
├── tsconfig.node.json # Configuração TypeScript para Node.js
└── vite.config.ts # Configuração do Vite


