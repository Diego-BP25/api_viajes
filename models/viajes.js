const {Schema, model} = require('mongoose')

const ViajesSchema = Schema({
    codigo: {
        type: Number,
        required:[true, "El codigo es obligatorio"]
    },

    ciudadOrigen: {
        type: String,
        required:[true, "La ciudad de origen es obligatoria"]
    },

    ciudadDestino: {
        type: String,
        required:[true, "La ciudad del destino es obligatoria"]
    },

    precioPesos: {
        type: Number,
        required:[true, "El precio en pesos es obligatoria"]
    },

    cantidadPasajeros: {
        type: Number,
        required:[true, "La cantidad de pasajeros es obligatoria"]
    },

    
})

//Exportar la función UsuarioSchema
module.exports = model('Viajes',ViajesSchema)

