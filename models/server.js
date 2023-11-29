const express=require('express')//Servidor de Node
const cookieParser = require('cookie-parser'); //Gestionar las cookies
const cors=require('cors'); //Implementar seguridad
const bodyParser= require('body-parser')//Recibir datos mediante formularios HTML 
const {dbConnection} =require('../database/config')//Conexion Base de datos

class Server{
    //Constructor es lo que ejecuta
    constructor (){
        this.app= express()
        this.port = process.env.PORT // Capturando variable
        this.viajesPath ='/api/viajes' //Ruta publica para la API
        this.conectarDB() //Conexion base de datos
        this.middlewares()
        this.routes() //Establecer las rutas
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`Escuchando por el puerto ${this.port}`)
        })
    }
    
    middlewares(){
        this.app.use(cookieParser()); 
        this.app.use(express.static(__dirname + "/public"));
        this.app.use( cors() );
        this.app.use(bodyParser.json()) // for parsing application/json
    }


    routes(){
        this.app.use(this.viajesPath, require('../routes/viajes'))
    }
    async conectarDB(){
        await dbConnection() //Esperar la respuesta del servidor
    }
}
module.exports = Server