require('dotenv').config() //Importar paquete dotenv. Variab
const Server = require('./models/server')

const server = new Server() //Instanciar el objeto server

server.listen() //Iniciar el Servidor Local