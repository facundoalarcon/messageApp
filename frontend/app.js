import './styles/app.css';

import UI from './UI';

document.addEventListener('DOMContentLoaded', () => {
// una vez cargado el DOM (primer parametro) ejecuto esta función
// para que una vez que haya sido cargado el navegador voy a traerme los datos desde el backend para mostrar los datos en pantalla
// esto me carga todos los datos desde el backend ni bien entro a la pagina
    const ui = new UI();
    ui.renderMessages();

}); 

document.getElementById('message-form') // capturo el elemento message-form (le puse un id asi en el html)
    .addEventListener('submit', e =>{ 
        const name = document.getElementById('name').value;
        const surname = document.getElementById('surname').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const query = document.getElementById('query').value;
    
        const formData = new FormData();
       
        formData.append('name', name);
        formData.append('surname', surname);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('query', query);

        const ui = new UI();
        ui.addNewMessage(formData);

        e.preventDefault(); //al momento de enviar el formulario le saca su comportamiento por defecto, ya no lo reinicia. Cancela este comportamiento y despues podemos hacer lo que uqeremos
        
    });

// Utilice Ctrl+K, Ctrl+C para comentar código y Ctrl+K, Ctrl+U para quitar un comentario.

// // para eliminar, se relaciona con delete de UI.js
// document.getElementById('messages-card')
//     // con esto captura cada click dentro del Id messages-card
//     .addEventListener('click', e =>{
//         // si de todos los elementos que yo estoy clickeando alguno de ellos tiene una
//         // clase delete, entonces vamos a capturarlo (vamos a capturar el elemento que tenga como clase delete)
//         if (e.target.classList.contains('delete')) {
//             // puedo capturar el id gracias a la propiedad ${} que habíamos puesto en el html de UI.js
//             // console.log(e.target.getAttribute('_id'));
//             const ui = new UI();
//             ui.deleteMessage(e.target.getAttribute('_id'));
//             ui.renderMessage('Message Removed', 'danger', '2000')
//         }
//         e.preventDefault();// para cancelar el comportamiento por defecto que te vuelve para arriba la pantalla
//     });