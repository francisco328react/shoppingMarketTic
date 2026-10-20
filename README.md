# ShoppingMarketTic

Aplicação web de loja virtual (e-commerce) desenvolvida com **React**, **TypeScript** e **Vite**, estilizada com **Tailwind CSS** e com navegação entre páginas via **React Router**.

<!-- TODO: descreva em 1 ou 2 frases o projeto (ex.: vitrine de produtos, carrinho de compras, categorias). -->

## Sumário

- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Pré-requisitos](#pré-requisitos)
- [Instalação e execução](#instalação-e-execução)
- [Scripts disponíveis](#scripts-disponíveis)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Roadmap](#roadmap)
- [Contribuindo](#contribuindo)
- [Licença](#licença)
- [Autor](#autor)

## Funcionalidades

<!-- TODO: liste as funcionalidades reais. Exemplos:
- Listagem e vitrine de produtos
- Página de detalhes do produto
- Carrinho de compras
- Navegação entre páginas
- Layout responsivo -->

## Tecnologias

| Categoria   | Tecnologia                                                  |
| ----------- | ----------------------------------------------------------- |
| UI          | [React 19](https://react.dev/)                              |
| Linguagem   | [TypeScript](https://www.typescriptlang.org/)               |
| Build       | [Vite 6](https://vite.dev/)                                 |
| Estilização | [Tailwind CSS 4](https://tailwindcss.com/)                  |
| Rotas       | [React Router 7](https://reactrouter.com/)                  |
| Qualidade   | [ESLint 9](https://eslint.org/) com typescript-eslint       |

## Pré-requisitos

- [Node.js](https://nodejs.org/) 20 ou superior
- npm (o projeto possui `package-lock.json`)

## Instalação e execução

1. Clone o repositório:

```bash
git clone https://github.com/francisco328react/shoppingMarketTic.git
cd shoppingMarketTic
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Acesse `http://localhost:5173` no navegador (porta padrão do Vite).

## Scripts disponíveis

| Comando           | Descrição                                                |
| ----------------- | -------------------------------------------------------- |
| `npm run dev`     | Inicia o servidor de desenvolvimento                     |
| `npm run build`   | Verifica os tipos com `tsc` e gera o build de produção   |
| `npm run preview` | Serve localmente o build de produção                     |
| `npm run lint`    | Executa o ESLint em todo o projeto                       |

## Estrutura do projeto

```
shoppingMarketTic/
├── public/
│   └── assets/             # Imagens e arquivos estáticos
├── src/                    # Código-fonte da aplicação
├── index.html              # Ponto de entrada HTML
├── vite.config.ts          # Configuração do Vite (React + Tailwind)
├── eslint.config.js        # Configuração do ESLint
├── tsconfig.json           # Configuração do TypeScript
├── tsconfig.app.json
├── tsconfig.node.json
└── package.json
```

<!-- TODO: detalhe as subpastas de src/ (ex.: pages, components, routes, data, hooks). -->

## Roadmap

- [x] Configuração inicial com Vite, React, TypeScript e Tailwind CSS
- [x] Roteamento com React Router
- [ ] <!-- TODO: próxima funcionalidade (ex.: integração com API, carrinho persistente) -->
- [ ] <!-- TODO: testes automatizados -->
- [ ] <!-- TODO: deploy (ex.: Vercel ou Netlify) -->

## Contribuindo

Contribuições são bem-vindas.

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/minha-feature`)
3. Faça commit das alterações (`git commit -m "feat: minha feature"`)
4. Envie para o seu fork (`git push origin feature/minha-feature`)
5. Abra um Pull Request

## Licença

<!-- TODO: defina a licença (ex.: MIT) e adicione um arquivo LICENSE. -->

## Autor

**Francisco**, [@francisco328react](https://github.com/francisco328react)
