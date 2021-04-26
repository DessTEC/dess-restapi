require('dotenv').config();

//Leer el archivo server/index.js
const server = require('./server');

//Se define el puerto de la API, si existe en .env se toma, sino toma el 8131
const PORT = process.env.PORT || 8131;

server.listen(PORT, () => console.log(`Server is live at localhost:${PORT}`));



