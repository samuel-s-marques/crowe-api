/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

// listar candidatos
Route.post('/applicants', 'ApplicantsController.index')

// novo candidato
Route.post('/applicants/new', 'ApplicantsController.store')

// mostrar candidato específico, dado o ID
Route.get('/applicants/:id', 'ApplicantsController.show')

// atualizar candidato específico, dado o ID
Route.put('/applicants/:id', 'ApplicantsController.update')

// deletar candidato específico, dado o ID
Route.delete('/applicants/:id', 'ApplicantsController.destroy')