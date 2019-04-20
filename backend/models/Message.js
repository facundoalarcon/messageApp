const { Schema, model } = require('mongoose');

// defino el schema de libros que es como ses guarda en la bd
const MessageSchema = new Schema({
    name: { type: String, required: true},
    surname: { type: String, required: true},
    email: { type: String, required: true },
    phone: { type: String },
    query: { type: String, required: true }
});

// para que se puedea reutilizar en otro lado hay que exportarlo
// el metodo model toma el nombre del modelo (primer parametro) y el esquema (segundo parametro)
module.exports = model('Message', MessageSchema);