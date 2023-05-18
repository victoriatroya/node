const { Router } = require('express');
const {getUsuarios, putUsuario, postUsuario, deleteUsuario} = require("../controllers/usuarios");

const router = Router();

router.get('/', getUsuarios);

router.put('/:id', putUsuario);

router.post('/', postUsuario);

router.delete('/', deleteUsuario);

module.exports = router;