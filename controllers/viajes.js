const {response}= require('express')

//Importancia de los modelos
const Viajes = require('../models/viajes')

//Metodo GET de la API
const viajesGet = async (req, res = response) =>{
    //const {nombre} = req.query //Desestructuracion

    //Consultar todos los Vehiculos
    try {
        const { ciudadOrigen } = req.body;

        let viajes;
        if (ciudadOrigen) {
            // Si la ciudadOrigen está presente, filtra los viajes por esa ciudad
            viajes = await Viajes.find({ciudadOrigen:ciudadOrigen });
        } else {
            // Si no hay ciudadOrigen, obtén todos los viajes
            viajes = await Viajes.find();
        }

        res.json({
            viajes,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error interno del servidor',
        });
    }
};
//Método POST de la api
const viajesPost = async(req, res) => {
    let mensaje = 'Inserción Exitosa'
    const body = req.body //Captura de atributos
    //console.log(body);
    try {
        const viajes = new Viajes(body) //Instanciando el objeto
        await viajes.save() //Inserta en la colección
    } catch (error) {
        mensaje = error
        console.log(error)
    }
    res.json({
        msg: mensaje
    })
}


//Método Put de la api
const viajesPut = async(req, res = response) => {

    const {codigo, nombre, descripcion, estado} = req.body
    let mensaje = 'Modificación exitosa'
    try{
         await Viajes.findOneAndUpdate({codigo:codigo}, 
            {codigo:codigo, ciudadOrigen:ciudadOrigen, ciudadDestino:ciudadDestino, precioPesos:precioPesos, cantidadPasajeros:cantidadPasajeros})
    }
    catch(error){
        mensaje = 'Se presentaron problemas en la modificación.'
    }

    res.json({
        msg: mensaje
    })
}
//Método DELETE de la api
const viajesDelete = async(req, res) => {

    const {codigo} = req.body
    let mensaje = 'La eliminiación se efectuó exitosamente.'

    try{
        const viajes = await Viajes.deleteOne({codigo: codigo})
    }
    catch(error){
        mensaje = 'Se presentaron problemas en la eliminación.'
    }

    res.json({
        msg: mensaje
    })
}


module.exports= {
    viajesGet, 
    viajesPost,
    viajesPut,
    viajesDelete
}