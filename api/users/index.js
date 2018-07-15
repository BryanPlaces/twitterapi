const router = require('express').Router();
const controller = require('./users.controller');

router.get('/', controller.obtenerUsuarios);
router.get('/:username', controller.obtenerUsuarioPorUsername);
router.post('/', controller.crearNuevoUsuario);
router.delete('/:username', controller.borrarUsuario);
router.put('/:username', controller.editarUsuario);

module.exports = router;
