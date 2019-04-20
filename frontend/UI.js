// nos permitirá interactuar con la apliación
// nos permite tener manejo de nuestro navegador/pantalla/interfaz
import MessageService from './services/MessageService';

// import { format } from 'timeago.js'; // para mostrar en formato hace tantas hs... solo quiero su metodo format de timeago.js

const messageService = new MessageService();// porque lo vamos a usar bastante

class UI {
    // todos los metodos son para interactuar con el navegador/interfaz

    async addNewMessage(message) {
        await messageService.postMessage(message); //recibe un libro
        this.clearMessageForm(); //llama al metodo para reiniciar el formulario de esta misma clase
    };

    clearMessageForm() {
        document.getElementById('message-form').reset();//deja en blanco (resetea) los campos del id message-form del html
    };

};
export default UI;
