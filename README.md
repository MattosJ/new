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


## Explicação do código
### back-end

src
├── Routes
  ├── NotionRoutes.ts

Este arquivo contém as rotas da API responsáveis por integrar o backend com a Notion API, tanto para buscar todos os posts quanto para buscar um post específico. Também define a estrutura esperada dos dados que serão utilizados no frontend.

 Função mapNotionProperties
 Responsável por converter uma página da Notion no formato definido pela interface NotionPost.

  getText: extrai texto plano dos campos rich_text ou text.

  getImage: extrai a URL da primeira imagem (do tipo file) em um campo de arquivos.

  Essa função permite normalizar os dados da Notion antes de usá-los no frontend.

Rota: GET /post/:id
  Busca um post específico da Notion, utilizando o ID passado na URL.
  router.get('/post/:id', async (req, res) => { ... });

  - Usa notion.pages.retrieve para buscar a página.
  - Aplica mapNotionProperties para estruturar os dados.
  - Retorna um JSON com os dados do post.

Rota: GET /posts
Busca todos os posts da base do Notion.
  router.get('/posts', async (req, res) => { ... });

  - Acessa o banco de dados da Notion definido por NOTION_DATABASE_ID.
  - Ordena os resultados pela data (datePostBanner), do mais recente para o mais antigo.
  - Mapeia todos os posts usando mapNotionProperties e retorna um array JSON.


src
├── Routes
  ├── NotionRoutes.ts
├──index.ts

Index.ts
  Este é o arquivo principal do backend, responsável por configurar e iniciar o servidor Express. Ele também define as rotas para integração com a Notion API e o envio de e-mails via Nodemailer.

  Configurações iniciais
  import express from 'express';
  import cors from 'cors';
  import dotenv from 'dotenv';
  import nodemailer from 'nodemailer';
  import { Client } from '@notionhq/client';

  - Carrega variáveis de ambiente com dotenv.
  - Ativa o CORS e o parsing de JSON.
  - Instancia o cliente da Notion API com a chave do ambiente.


  mapNotionProperties,  app.get('/api/notion/post/:id', async (req, res) => {...}) e app.get('/api/notion/posts', async (req, res) => {...})

  Explicações em notionRoutes.ts

Rota POST /send-email
  app.post('/send-email', async (req, res) => { ... });
  - Recebe os dados do formulário de contato: name, email e message.
  - Usa Nodemailer para enviar um e-mail a partir do endereço configurado nas variáveis de ambiente:
  - EMAIL_USER
  - EMAIL_PASS
  - Retorna um JSON indicando sucesso ou erro no envio.

Inicialização do servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
O servidor Express é iniciado na porta especificada no .env ou, por padrão, na 5000.


src
├── Routes
  ├── NotionRoutes.ts
├──index.ts
.env

  - EMAIL_USER == Email
  - EMAIL_PASS == Senha para usar em aplicativos
  - REACT_APP_API_URL == URL base do back-end
  - NOTION_API_KEY == chave da API notion 
  - NOTION_DATABASE_ID == Id da base de dados notion

### Front-End
O front está na pasta geral do site.
  duas pastas principais podem ser vistas:
    - public : temos o ícone , o modo de acesso de bot para indexar o site e o redirects.
      - intera.ico
      -robots.txt
      - _redirects
    - src : A principal pasta do front é nela que temos as pastas [assets, components,styles, pages,services]
      - assets : onde estão as imagens, icones e vetores que são adicionados ao site de forma não dinamica.
      - components : onde se localizam os componentes do site.
      - styles : A pasta styles fica dentro da pasta components e ela é responsável pela maioria dos estilos do site.
      - pages : Localiza as páginas do site.
      - services : Onde fica a conexão para receber as informações do back-end.

  #### components:
    - BannerProjets.tsx
    - BannerTextImage.tsx
    - BannerWho.tsx
    - CardGrid.tsx
    - CardProjects.tsx
    - CardsContainer.tsx
    - CardsContainerProjects.tsx
    - CardService.tsx
    - ContactBanner.tsx
    - ContactBanner2.tsx
    - ContactCard.tsx
    - Footer.tsx
    - Header.tsx
    - Main.tsx
    - MenuPost.tsx
    - ObjectDecoretionM2.tsx
    - ObjectMDecoretion.tsx
    - ObjetctPDecoretion.tsx
    - PostBanner.tsx
    - PostBodyNotice.tsx
    - PostCard.tsx
    - PostContainer.tsx
    - ShareMenu.tsx
    - TopHeader.tsx

  #### Detalhes dos components:
    - BannerProjets.tsx
      - Um banner para a página projetos -> Recebe título Texto para ser destacado,  textos, imagens e texto alternativo para a imagem. Exemplo de uso no código. 

    - BannerTextImage.tsx
      - Um banner que Tem título e subtítulo e sua imagem é implementada através de um background no bloco feito de uma forma que seja possível um visual em que o texto e a imagem fiquem sobreposto se preciso. Exemplo de uso no código.

    - BannerWho.tsx
      - Um banner para a página Quem somos -> Recebe título Texto para ser destacado,  textos, imagens e texto alternativo para a imagem. Exemplo de uso no código. 
    
    - CardGrid.tsx
      - Adiciona cards que são definidos no próprio componente, esses cards tem algumas variáveis/propriedades [id,title,description,image,link,imageAlt], que serão utilizados para a construçã do conteúdo dentro do card.
    
    - CardProjects.tsx 
      - Um card com alguma propriedade [image,title,subtitle,description,audience,buttonText,onButtonClick,style,className,themeColor]
      className - caso quiser adicionar uma classe css a mais a que já tem no próprio card. themeColor -> define a cor tema do card e o style para definir estilos adicionais. alguns valores tem padrão definido caso não especificados, verificar no compoenente.

    - CardsContainer.tsx
      - O container que vai chamar o CardService para ser adicionado dinâmicamente os posts de projetos que estão destacados.
          - post.category?.trim().toLowerCase() === "projeto" &&
          - post.highlight?.trim().toLowerCase() === "sim"

    - CardsContainerProjects.tsx
      - O container que vai chamar o CardProjects para exibir os cards todos os cards da categoria quemsomos dinamicamente. 
      - post.category?.trim().toLowerCase() === "quemsomos"
    
    - CardsService.tsx
      - Muito semelhante ao CardProjects.tsx. Porém tem algo que o diferencia completamnete
       -  to={`/post-projects/${id}`}
       caso seja removido a linkagem se torna incorreta.
  
    - ContactBanner.tsx
      - Banner para contato que tem diversar propriedades [id,backgroundColor,title,highlightText,subtitle,buttonText,adtinionalInfo,forWho,titleColor,subtitleColor,highlightColor,buttonBackgroundColor,buttonTextColor,forWhoColor,adtinionalInfoColor,imageAlt]
      Que permite bastante personalizações.
      Temos um trecho importante de código:
        - const isEven = id % 2 === 0;
        - const flexDirection = isEven ? 'row-reverse' : 'row';
          - Caso o valor do id for par a imagem fica a esquerda, se não a direita.

    - ContactBanner2.tsx
      - Ele é o Banner de contato do blog comsiste em.  imagem , texto e botão.

    - ContactCard.tsx 
      - Onde fica o formulário de contato e uma imagem.
        - O formulário de contato precisa 
        const API_URL = import.meta.env.VITE_API_BASE_URL; que fica no .env do front.
        E do back-end rodando para funcionar da forma adequada. Imprimi um status  {status && <p>{status}</p>}

    - Footer.tsx
      - O rodapé consiste em : [logo, menu de redes sociais, menu de páginas do site]
      Usado em todas as págians do site.

    - Header.tsx
      - 'Cabeçalho' : Consiste em Logo menu de páginas do site com um botão de contato no último indice.
      Com um menu hamburguer na versão até width: 992px.
       usado em todas as páginas do site.
    
    - Main.tsx
      - Onde fica o conteudo principal da página home.
      Só utilizado 1x.
    
    - MenuPost.tsx
      - Uma div com título e link para o local determinado na chamada do componente.
    - ObjectDecoretionM2.tsx , ObjectMDecoretion.tsx
    e  ObjetctPDecoretion.tsx  consiste em objetos de decoração. o M2 e  M tem uma imagem fixa.
    o P é puro css.
    A chamada deles é bem semelhante :
    o M2 M
    <ObjectMDecoretionM2 style={{position:'absolute', bottom:"-60px", right:"50%" }}/>

    <ObjectPDecoretion style={{position : 'absolute', bottom:'-60px' , right:'48%', backgroundColor : '#FEC820'}} />

    - PostBanner.tsx
      - Banner para os post da página blog.

    - PostBodyNotice.tsx
      - Onde é mapeado o corpo da notícia(post). Tem muitas variáveis / propriedades. Dentro dele tem o <ShareMenu url={url} title={titulo} />
      que é o menu de compartilhamento. Recomendo ver o exemplo de uso.
    
    - PostCard.tsx
      - Cards dos posts, destaque para <Link to={`/post${link}/${id}`} className="post-card-link"> , para pode ser reutilizado tanto na páginas post-projects tanto na post.
       Aparece de duas formas  link: `` e   link: `-projects`

    - PostContainer.tsx
      - Onde fica todo o corpo do post abaixo do banner. Perceba que é nele que será 'adicionado' os valores dentro de outros componente que estão dentro de outros componentes. Indico ver o código e o exemplo de uso . ver o exemplo completo no NewPostProjects.tsx

    - ShareMenu.tsx
      - Ver os comentários.
    
    - TopHeader.tsx
      - Está em toda página é o slogan que fica acima do header.tsx. vai adicionando letra por letra a cada determinado tempo

  Dentro da pasta pages
    - blog.tsx
    - FaleComnosco.tsx
    - NewPost.tsx
    - NewPostProjects.tsx
    - NossosProjetos.tsx
    - Projetos.tsx
    - quemSomos.tsx
    - Servico.tsx


