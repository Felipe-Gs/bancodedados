const express = require('express');
const routes = express.Router();
const UsersController = require('./controllers/UsersController');
const funcionariosController = require('./controllers/funcionariosController');
const reservaController = require('./controllers/reservaController');


//Controle da rota por privilegios

//Controladores de usuario
routes.post('/cliente', UsersController.create);
routes.get('/cliente', UsersController.read);
routes.put('/cliente/:id', UsersController.update);
routes.delete('/cliente/:id', UsersController.delete);


//Controladores de usuario
routes.post('/funcionario', funcionariosController.create);
routes.get('/funcionario', funcionariosController.read);
routes.put('/funcionario/:id', funcionariosController.update);
routes.delete('/funcionario/:id', funcionariosController.delete);


routes.post('/reserva', reservaController.create);
routes.get('/reserva', reservaController.read);
routes.delete('/reserva/:id', reservaController.delete);




module.exports = routes;