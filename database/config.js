const mongoose = require('mongoose')

const dbConnection = async()=>{
    try{
        mongoose.connect(process.env.MONGO_CNN)
        console.log('Conexion Exitosa a la base de Datos Mongo')
    }
    catch(error){
        console.log(error)
    }
}
//Exportar la cadena de conexion
module.exports ={dbConnection}