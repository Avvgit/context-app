// useState es un hook que nos permite manejar el estado de un componente. En una aplicación bancaria, podríamos utilizar useState para guardar y actualizar diferentes valores que necesiten ser mostrados o manipulados en la interfaz de usuario.

// Por ejemplo, podríamos utilizar useState para guardar el saldo actual del usuario en un componente de "Cuenta" y actualizarlo cada vez que se realice una transacción. El hook useState recibe un valor inicial y devuelve un par de valores: el valor actual y una función para actualizarlo. En este ejemplo, el valor inicial sería el saldo inicial de la cuenta del usuario, y la función para actualizarlo se utilizaría cada vez que se realice una transaccion.

// EJ: 
const [balance, setBalance] = useState(initialBalance);

// Además, también podríamos utilizar useState para guardar y actualizar el estado de otros elementos de la interfaz de usuario, como un formulario de transacción, un menú desplegable de cuentas, o un indicador "loading" mientras se procesa una transacción.

const [formData, setFormData] = useState({});
const [selectedAccount, setSelectedAccount] = useState(null);
const [isLoading, setIsLoading] = useState(false);

//En resumen useState es una herramienta muy útil que permite manejar el estado de un componente y hacer que nuestra aplicación sea más dinámica y fácil de usar para el usuario.





// Contador simple con useState para cambiar el estado de componente del boton.

// El estado siempre se asocia a un componente. Cuando provocamos un setState utilizando la funcion que useState nos da, solo de esa manera provocaremos un nuevo renderizado. 

import { useState } from "react";

const getiInitialLikes = () => 12;
const Likes = () => {

  const [likes, setLikes] = useState(getiInitialLikes); // Punto de partida de nuestro estado
  return <button className="btn btn-primary" onClick={() => setLikes(likes + 1) }>{likes} Likes </button>
}

export default Likes;