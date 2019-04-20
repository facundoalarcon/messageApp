// un servicio es una clase con metodos para reutilizarlo en toda la aplicación
class MessageService {

    constructor() {
        this.URI = 'http://localhost:3000/api/messages'; // aca esta mi api
    }

    // mirar todos los libros
    async getMessage(){
        //fetch es un metodo de js para hacer peticiones get a alguna dirección mi backend
        const response = await fetch(this.URI);
        // convertimos los datos en crud a json    
        const messages = await response.json();
        return messages;
    }

    // guardar un libro
    async postMessage(message){
        // le tengo que pasar la URL y el dato (eso va despues de la ,)
        // res hace referencia a respuesta
        const res = await fetch(this.URI, {
            // le colocamos cabeceras (información extra que sirve para decirle al backend que datos le estoy enviando, le describo que es lo que le estoy enviando al backend)
            method: 'POST',
            body: message
        });

        const data = await res.json();
        console.log(data);
    }

    // eliminar un libro
    async deleteMessage(messageId){
        // recordemos que para borrar un libro le debemos pasar toda la URL/id del libro a borrar y eso lo pasamos desde el frontend al backend, por eso la expresión regular de abajo
        // el otro parametro que se le pasa es headers o información adicional del dato que se va a borrar
        const res = await fetch(`${this.URI}/${messageId}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'DELETE'
        });

        const data = await res.json();
        
        console.log(data);
    }
}

export default MessageService;