# crowe-api
Desafio da Crowe para candidatos. API.

A Crowe está iniciando um novo processo seletivo e solicitou ao setor de Tecnologia a criação de um formulário para cadastrar os candidatos que participarem desse processo seletivo.

## Tecnologias
- [ ] AdonisJS
- [ ] Typescript
- [ ] MySQL

## TODO
- [x] Back-end
  - [x] Cadastro
  - [x] Listagem
  - [x] Exclusão
  - [x] Exibição
  - [x] Edição
- [ ] API [ViaCep](https://viacep.com.br/)

## Executando o projeto
- Utilize o **yarn** ou o **npm install** para instalar as dependências do projeto.
- Conecte o projeto a um banco de dados MySQL (através do [XAMPP](https://www.apachefriends.org/index.html) ou outro)
- Defina no arquivo .env.example as configurações do projeto
- Remova .example do .env.example

```cl
PORT=3333
HOST=0.0.0.0
NODE_ENV=development
APP_KEY=
SESSION_DRIVER=cookie
CACHE_VIEWS=false
DB_CONNECTION=mysql
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_USER=
MYSQL_PASSWORD=
MYSQL_DB_NAME=crowe
```

Agora, inicie o projeto.
```cl
node ace serve --watch
```

## Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.