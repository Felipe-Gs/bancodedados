const express = require('express');
const routes = express.Router();
const UsersController = require('./controllers/UsersController');


//Controle da rota por privilegios

//Controladores de usuario
routes.post('/cliente', UsersController.create);
routes.get('/cliente', UsersController.read);
routes.put('/cliente/:id', UsersController.update);
routes.delete('/cliente/:id', UsersController.delete);

// //Controladores de usuarios privilegiados
// routes.get('/users/admin', UsersController.read_admin, AdminRole());

// //Controladores de produto
// routes.post('/products', ProductsController.create);
// routes.get('/products', ProductsController.read);
// routes.put('/products/:id', ProductsController.update);
// routes.delete('/products/:id', ProductsController.delete);

// //Controladores de transação
// routes.post('/transactions', TransactionsController.create);
// routes.get('/transactions', TransactionsController.read);
// routes.put('/transactions/:id', TransactionsController.update);
// routes.delete('/transactions/:id', TransactionsController.delete);

module.exports = routes;