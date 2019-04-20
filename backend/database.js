const mongoose = require('mongoose');

// process.env me da información de mis variables de entorno
// console.log(process.env.MONGODB_URI);

mongoose.connect(process.env.MONGODB_URI
    , {//mongodb es el protocolo de mongodb
    useNewUrlParser: true // colocamos este objeto para definir una config para evitar que mongo nos lance un error (es un asunto interno de la biblioteca)
})
// una vez que intente conectarse podemos tener dos eventos then (satisfactorio) erorr (catch)
    .then(db => console.log('db is connected')) // capturo el evento con el objeto db
    .catch(err => console.error(err)); // capturo el erorr con el objeto err

