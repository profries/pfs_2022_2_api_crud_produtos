const express = require('express');
const router = express.Router();

const controller = require('../controller/produto_controller')

//Base: /api/produtos

router.get('/', controller.listar)
router.post('/', controller.inserir)
router.get('/:id', controller.buscarPorId)
router.put('/:id', controller.atualizar)
router.delete('/:id', controller.deletar)

module.exports = router;