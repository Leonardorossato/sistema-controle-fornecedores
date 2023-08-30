# Objetivo: 
- Criar um pequeno sistema que controle os fornecedores de uma empresa fictícia.

# Importante
- Razão Social
- Endereço
- Contatos(compostos por nome e email)

#  Tecnologias Utilizadas:
- Framework: Nestjs.js;
- Swagger;
- Docker;
- Typeom;
- Banco de dados Postgres no dbeaver.

## Rodando o Projeto Localmente:

1 - Clonnar o repositório do projeto:
- git clone [https://github.com/Leonardorossato/sistema-controle-fornecedores](https://github.com/Leonardorossato/sistema-controle-fornecedores)

2- instalar as dependências:
- Ter instalado o Node.js versão LTS: [Node.js](https://nodejs.org/en) , apos isso instalar o Nestjs: [Nest.js](https://docs.nestjs.com)
- Apos a finalização da instalação do node.js, instlar no terminal do windows ou linux npm g -i yarn. Ou utulizar o npm como instalador de pacotes.
- npm install ou yarn

3 - Copiar o .env.example para .env e atualizar as variáveis fazer o mesmo com o example.ormconfig.js e renomear para ormconfig.js.

4 - Rodar o projeto :
- docker coompose up -d --build;
- yarn migration:run;
- npm run:start ou yarn start:dev.
