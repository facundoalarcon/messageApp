// se require el modulo dotenv y se usa su metodo config para leer los archivos .env
// la idea es que el .ev este solo en tu server por lo tanto no se sube a github
if (process.env.NODE_ENV !== 'production') {
    // con esto ejecuta dotenv o no para solo requerir lo necesario
    require('dotenv').config();
}
//require('dotenv').config(); // el dotenv sirve solo en desarrollo, no se usa en produccion
//console.log(process.env.NODE_ENV)

const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path'); //para que se maneje en la ruta de directorios
const cors = require('cors'); //permite que dos servidores se puedan comunicar

// Initializations
const app = express(); // me devuelve un objeto. app quedaria como la aplicación del servidor (es el servidor)
require('./database');

// Settings
app.set('port', process.env.PORT || 3000); // si en mi variable de entorno existe una variable llamada PORT tomala y usala sino el puerto 3000, Heroku despues por ej nos da un peurto

// Middleware: todos los middleware de express son funciones
app.use(morgan('dev')); //ejecuta el dev

    //almacenamiento en el disco, esto es para las imagenes
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/uploads'),
    filename(req, file, cb) { //req es la peticion, file es el archivo que v a acrear, cd es la funcion siguiente que va a ejecutar para que continue el programa
        cb(null, new Date().getTime() + path.extname(file.originalname)); // null para los errores, y la fecha actual (un nro basado en la fecha con new Date().getTime() probar en el interprede de node) para el nombre de la imagen
                                                                          // la otra parte de path.extname es para extraer del nombre del archivo la parte del tipo, onda photo.jpg me extrae el .jpg y lo concatena al numero para saber el tipo de imagen
    }
})
app.use(multer({storage}).single('image')); //le paso como parametro storage, le digo single ara que supervise una sola carga a la vez (esa carga se va a extraer del html como input con el name de image)
app.use(express.urlencoded({extend: false})); // este middleware nos va a ayudar cuando tengamos un formulario en el frontend, al cual va a enviar datos al backend vamos a poder interpretar los datos del formulario como si fuera un json, de ahi lo vamos a poder extraer
app.use(express.json()); // para entender peticiones ajax y json
app.use(cors());

// Routes
app.use('/api/messages', require('./routes/messages')); //el app.use es para que el server lo use como ruta entonces lo pasao al app (el server)

// Static files: archivos no dinamicos, html, css, imagenes, etc
app.use(express.static(path.join(__dirname, './public')));

// Start the server
app.listen(app.get('port'), ()=> {
    console.log('Server on port', app.get('port'));
})

