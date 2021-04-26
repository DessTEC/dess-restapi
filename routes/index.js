//importamos la clase 
const {Router} = require('express');

//leer controllers/index.js
const controllers = require('../controllers');

//crear objeto router a partir de clase Router
const router = Router();

//definir rutas
router.get('/', (req, res) => res.send('Welcome'))

//insertar nuevo usuario
router.post('/users', controllers.createUser);
//leer todos los usuarios
router.get('/users', controllers.getAllUsers);

module.exports = router;