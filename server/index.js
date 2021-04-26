//inlcuir cors
const cors = require('cors');

//incluir instancia de express server
const express = require('express');

//incluir archivos de rutas de routes/index.js
const routes = require('../routes');

//crear instancia de express
const server = express();

//usar cors en el server
server.use(cors());
server.options('*', cors());

server.use(express.json());

server.use('/api', routes);

//se exporta objeto server para poder ser usado
module.exports = server;
