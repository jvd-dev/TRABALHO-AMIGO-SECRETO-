const { Router } = require('express');

const participanteController = require('../controllers/participanteController');

const routes = Router();

routes.get('/participante/:id', participanteController.getById);
routes.post('/participante/:id', participanteController.create);
routes.put('/participante/:id', participanteController.edit);
routes.delete('/participante/:id', participanteController.delete);

module.exports = routes;