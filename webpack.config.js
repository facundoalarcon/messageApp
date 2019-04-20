const path = require('path'); // viene de node, porque puedo usar node en desarrollo
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production'; //almacena un true o un false

module.exports = {

    entry: './frontend/app.js', //donde esta mi archivo principal del front end
    // donde coloca el código convertido
    output: {
        path: path.join(__dirname, 'backend/public'), // ruta de donde esta
        filename: 'js/bundle.js' //nombre del archivo generado
    },

    mode: 'production', // le indicamos a webpack que estamos en modo de desarrollo (development) o producción (production)

    module: {
        rules: [ // como se van a comportar determinado tipo de archivos
            {
                test: /\.css/, // testea todos loar archivos que terminen en .css
                use: [ // despues de testear ejecuta lo siguiente
                    /*Si estoy en desarrollo (devMode: true) carga los estilos dentro del js (ejecuta 'style-loader')
                    Si estoy en priducción (devMode: false) carga los archivos de estilos dentro de su propio css con MiniCssExtractPlugin.loader*/
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },

    // arreglo de objetos
    plugins: [
        new HtmlWebpackPlugin({
            template: './frontend/index.html', //donde esta el archivo html que tenemos que copiar dentro de public
            minify: { // con esto reducimos el codigo paraproduccion
                collapseWhitespace: true, //quita espacios inecesarios
                removeComments: true, //quita comentarios
                removeRedundantAttributes: true, // quita codigo redundante remueve el tipo de los atributos de los scrips que pongamos en el html
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true, // 
                useShortDoctype: true
            }

        }),
        // le especificamos como ejecutar mini css extract plugin
        new MiniCssExtractPlugin({
            filename: "css/bundle.css"
        })
    ],
    
    devtool: 'source-map'// para cuando estemos desarrollando y ver exactamente en que linea cometimos un error
};