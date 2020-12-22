# Linx Impulse - Desafio Técnico Desenvolvedor Fullstack

## Dependencies
- Docker
- Docker Compose

## Features
- Funciona com NodeJs v12.18.3
- Construir com Express Framework
- MongoDB (imagem docker)
- Apliccação com rotas básicas para GET com Mongo
- Apliccação com rotas básicas para GET com API Externa;
- Webpack no frontend

## Setup 

Instale imagens e dependências em contêineres docker para Mongo

```docker
$ docker-composer up -d
```

## Implantação local
Começar na ordem:

## catalogo-api

```node
$ npm i
```

```node
$ npm run dev
```

endereço: http://localhost:3000

## recommends-api

```node
$ npm i
```

```node
$ npm run dev
```
endereço: http://localhost:3001

## frontend-vitrine

```node
$ npm i
```

```node
$ npm run dev
```
endereço: http://localhost:4200
