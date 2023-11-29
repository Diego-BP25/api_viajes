const {Router} = require('express')
//Desestructuracion. EXtrar un atributo de un objeto

const route = Router()

//importar metodos del controlador
const {viajesGet, viajesPost, viajesPut, viajesDelete} = require('../controllers/viajes')

route.get('/',viajesGet) //Listar datos

route.post('/',viajesPost)

route.put('/',viajesPut)

route.delete('/',viajesDelete)


module.exports = route

//APP - SERVER - ROUTE - CONTROLLADOR - MODELO