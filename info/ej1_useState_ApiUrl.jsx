// useState se puede usar para almacenar URLs externas en nuestr aplicacion de React. 

// Ej. de cómo usar useState para almacenar una URL externa:

import { useState } from 'react';

function MyComponent() {  // const MyComponent = () => {   }
  const [apiUrl, setApiUrl] = useState('https://example.com/api');

  // Puedes usar la variable apiUrl en tu componente para hacer llamadas a la API o para construir URLs.

  return (
    <div>
      <p>API URL: {apiUrl}</p>
    </div>
  );
}

// En este ej se esta utilizando useState para crear una variable llamada apiUrl y una funcin setApiUrl para actualizar su valor. Se establece un valor inicial para la url https://example.com/api, luego se puede utilizar esta url para hacer llamadas a una API o construir otras urls en la aplicación.


/* Ej2 Urls Externa.

La URL externa podría actualizarse en la aplicacion por varias razones, algunas de las cuales pueden ser:

a) El usuario elige una nueva URL externa de una lista de opciones proporcionadas en la interfaz de usuario.

b) El usuario ingresa una nueva URL externa en un campo de texto o formulario.

c) El usuario elige una nueva opcion en un menú desplegable o un boton que cambia la URL externa.

d) La aplicacion recibe una nueva URL externa a través de un request a una API o una respuesta a un evento.

e) La aplicacion se esta utilizando en un entorno en el que la URL externa debe cambiar dinamicamente, por ejemplo en un sistema de paginacion o una aplicacion de navegación.

En general, cualquier cambio en la logica de tu aplicación que requiera un cambio en la URL externa, implica la necesidad de actualizar el valor almacenado en el estado.
*/

//Ejemplo, si quieres guardar una URL externa en un componente:

const [externalUrl, setExternalUrl] = useState('');

//Ahora, externalUrl es el valor que guarda la url, y setExternalUrl es la función que te permite actualizar ese valor. Por ejemplo, si deseas actualizar la URL externa con una nueva URL, puedes llamar a la función setExternalUrl:

setExternalUrl('https://example.com');

//Si se quiere guardar varias url externas, podrimos utilizar useState para cada una.

const [externalUrl1, setExternalUrl1] = useState('');
const [externalUrl2, setExternalUrl2] = useState('');
const [externalUrl3, setExternalUrl3] = useState('');


//En resumen, useState es una excelente opcion para almacenar URLs externas en react ya que permite guardar y actualizar facilmente un valor en el estado de un componente.

