# API RESTful usando Typescript e Swagger
Este é um projeto de API REST desenvolvido com TypeScript e documentado com Swagger. O objetivo deste projeto é aplicar conceitos aprendidos na faculdade.
## Swagger
![Swagger](https://github.com/nandoant/TypeScript-RESTful-API/blob/main/prints/swagger.png)

## Funcionalidades

- Gerenciamento de usuários (operações CRUD)
- Gerenciamento de tipos de assinatura
- Manipulação de assinaturas
- Integração com banco de dados MySQL 
- Documentação da API com Swagger
- Decoradores TypeScript para definição de rotas
- Middleware de tratamento de erros

## Stack Tecnológica

- TypeScript
- Express.js
- MySQL
- TSOA (TypeScript OpenAPI)
- Swagger UI

## Estrutura do Projeto

```
├── src/
│   ├── app.ts                 # Ponto de entrada da aplicação
│   ├── config/               
│   │   └── swagger.ts         # Configuração do Swagger
│   ├── controller/            # Controladores das rotas da API
│   ├── database/              # Conexão com banco de dados
│   ├── model/                 # Modelos de dados e DTOs
│   ├── repository/            # Camada de acesso a dados
│   ├── service/              # Lógica de negócios
│   ├── route/                # Rotas da API
│   └── util/                 # Funções utilitárias
├── package.json
├── tsconfig.json
└── tsoa.json                 # Configuração TSOA
```

## Pré-requisitos

- Node.js 16+
- Servidor MySQL
- npm ou yarn

## Instalação

1. Clone o repositório:
```sh
git clone <url-do-repositorio>
```

2. Instale as dependências:
```sh
npm install
```

3. Configure a conexão MySQL em `src/database/mysql.ts`

4. Faça o build do projeto:
```sh
npm run build
```

5. Inicie o servidor:
```sh
npm start
```

## Documentação da API

Acesse a documentação Swagger em:
```
http://localhost:3040/api-docs
```

## Endpoints Disponíveis

### Usuários
- `POST /api/user` - Criar usuário
- `PUT /api/user` - Atualizar usuário
- `DELETE /api/user` - Deletar usuário
- `GET /api/user` - Buscar usuário por ID
- `GET /api/user/all` - Listar todos os usuários

### Tipos de Assinatura
- `POST /api/subscriptionType` - Criar tipo de assinatura
- `PUT /api/subscriptionType` - Atualizar tipo de assinatura
- `DELETE /api/subscriptionType` - Deletar tipo de assinatura
- `GET /api/subscriptionType` - Buscar tipo de assinatura por ID
- `GET /api/subscriptionType/all` - Listar todos os tipos de assinatura

### Assinaturas
- `POST /api/subscription` - Criar assinatura
- `PUT /api/subscription` - Atualizar assinatura
- `DELETE /api/subscription` - Deletar assinatura
- `GET /api/subscription` - Buscar assinatura por ID
- `GET /api/subscription/all` - Listar todas as assinaturas

## Desenvolvimento

Para gerar rotas e documentação Swagger:
```sh
npm run build
```

## Tratamento de Erros

A API implementa respostas de erro padronizadas:
- 400: Requisição Inválida
- 404: Não Encontrado
- 409: Conflito
- 500: Erro Interno do Servidor
