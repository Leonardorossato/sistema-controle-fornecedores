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
- Instalar o [Docker](https://docs.docker.com/desktop/install/windows-install)
- npm install ou yarn

3 - Copiar o .env.example para .env e atualizar as variáveis fazer o mesmo com o example.ormconfig.js e renomear para ormconfig.js.

4 - Rodar o projeto :
- docker coompose up -d --build;
- yarn migration:run;
- npm run:start ou yarn start:dev.

# Funcionamento com Swagger : 
## Com a utilização do swagger api isso permite que possa ulizar sua api:

#Rota Post:
Parametros para passar no corpo da resposta:
{
  "razao_Social": "LAVANDERIA SEMPRE LIMPA LTDA",
  "endereco": "Rua Bela Vista, 356, Centro, Curitiba/PR",
  "contatoNome": "João Silva",
  "contatoEmail": "joao@lavanderiasl.com.br"
}
Caso a respota esteja correta aparecerá status 201 que o fornecedor foi criado se suas informações:
{
  "razaoSocial": "LAVANDERIA SEMPRE LIMPA LTDA",
  "endereco": "Rua Bela Vista, 356, Centro, Curitiba/PR",
  "contatos": [
    "João Silva",
    "joao@lavanderiasl.com.br"
  ]
}
Caso deixe algum campo vazio ou esqueça de preencher -lo:
{
  "statusCode": 400,
  "message": "Erro em algum campo para criar este fornecedor"
}

#Rota Get: Todos os Fornecedores que foram Cadastrados ou Apenas traz um vazio, porque não tem nenhum fornecedor ainda cadastrado:
## Response body 200
[]
ou
## Response body 200
[
  {
    "id": 1,
    "razao_Social": "LAVANDERIA SEMPRE LIMPA LTDA",
    "endereco": "Rua Bela Vista, 356, Centro, Curitiba/PR",
    "contatoNome": "João Silva",
    "contatoEmail": "joao@lavanderiasl.com.br"
  }
]

##Rota get fornecedor pelo Id :
- Parâmetro id : número
- Caso tenho um fornecedor com este id ele retorna suas informações:
- Staus 200 Ok
  {
  "id": 1,
  "razao_Social": "LAVANDERIA SEMPRE LIMPA LTDA",
  "endereco": "Rua Bela Vista, 356, Centro, Curitiba/PR",
  "contatoNome": "João Silva",
  "contatoEmail": "joao@lavanderiasl.com.br"
}
- Caso digite um id que não exista:
## Error: Internal Server Error
## Response body
{
  "statusCode": 500,
  "message": "Fornecedor com este id não existe"
}

## Rota para atualizar os dados do Fornecedor:
- Parametro id: número e dados novos para o fornecedor.

  {
  "razao_Social": "LAVANDERIA Teste Aqui LTDA",
  "endereco": "Rua Teste",
  "contatoNome": "Ana Moraes",
  "contatoEmail": "ana@lavanderiasl.com.br"
}
## Caso o Id e dados do copro estiverem corretos ira aparecer uma mensagem:
{
  "message": "Dados do fornecedor atualizados com sucesso."
}

## Caso O Id não exista:
{
  "statusCode": 400,
  "message": "Não foi possivel atulizar este fornecedor"
}

#Rota para deletar o fornecedor:
- Parâmetro Id : número

## Caso exista fornecedor com este Id ira retornar esta mensagem:
{
  "message": "Fornecedor removido do sistema com sucesso"
}

## Caso não exista:
{
  "statusCode": 400,
  "message": "Erro ao remover este fornecedor"
}
