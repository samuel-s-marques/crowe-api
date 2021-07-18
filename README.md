# crowe-api
Desafio da Crowe para candidatos. API.

A Crowe está iniciando um novo processo seletivo e solicitou ao setor de Tecnologia a criação de um formulário para cadastrar os candidatos que participarem desse processo seletivo.

## Tecnologias
- [ ] AdonisJS
- [ ] Typescript
- [ ] MySQL

## TODO
- [x] Cadastro
- [x] Listagem
- [x] Exclusão
- [x] Exibição
- [x] Edição

## API
| Método | Rota | Handler | Descrição |
|--------|------|---------:|:-----------|
|  GET  | /applicants | ApplicantsController.index | Lista todos os candidatos |
|  POST  | /applicants/new | ApplicantsController.store | Cria dados de um novo candidato |
|  HEAD, GET | /applicants/:id | ApplicantsController.show | Lista dados de um candidato específico, dado o ID |
|  PUT  | /applicants/:id | ApplicantsController.update | Atualiza dados de um candidato específico, dado o ID |
|  DELETE  | /applicants/:id | ApplicantsController.destroy | Apaga dados de um candidato específico, dado o ID |

## Executando o projeto
- Utilize o **yarn** ou o **npm install** para instalar as dependências do projeto.
- Defina no arquivo .env.example as configurações do projeto
- Remova .example do .env.example

```cl
PORT=3333
HOST=0.0.0.0
NODE_ENV=development
APP_KEY=
DB_CONNECTION=sqlite
```

Agora, inicie o projeto.
```cl
node ace serve --watch
```

## Licença
Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.