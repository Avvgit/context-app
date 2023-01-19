//Un ejemplo de cómo utilizar useState para almacenar y actualizar una URL externa en una aplicación bancaria podría ser el siguiente:

import { useState } from 'react';

function BankApp() { //En el componente BankApp, creamos un estado inicial con una URL externa:
  const [externalUrl, setExternalUrl] = useState('https://example.com');
//externalUrl es el valor actual de la URL externa, y setExternalUrl es una función que nos permite actualizar ese valor en el estado.


//Cada vez que el usuario hace clic en uno de los botones de abajo se ejecuta la funcion handleChangeAccount la cual actualiza el valor de externalUrl con la nueva URL correspondiente:
  const handleChangeAccount = (accountType) => {
    if(accountType === 'savings'){
      setExternalUrl('https://savings.example.com');
    }else{
      setExternalUrl('https://checking.example.com');
    }
  };

  return (
    //Se encuentran dos botones, uno para cambiar la url a https://savings.example.com y otro para cambiar a https://checking.example.com  :
    <div>
      <button onClick={() => handleChangeAccount('savings')}>Savings Account</button>
      <button onClick={() => handleChangeAccount('checking')}>Checking Account</button>


      // Finalmente se renderiza un iframe que contiene la url externa actual:
      <iframe src={externalUrl} />
    </div>
  );
}


/* En este ejemplo, estamos utilizando el hook useState para almacenar una URL externa inicial como https://example.com. Tenemos dos botones, uno para cambiar la url a https://savings.example.com y otro para cambiar a https://checking.example.com. Cada vez que el usuario hace clic en uno de los botones, se ejecuta la función handleChangeAccount la cual actualiza el valor de externalUrl con la nueva URL correspondiente y se renderiza un iframe con la nueva url.

De esta manera, el usuario podría ver diferentes páginas web con diferentes tipos de cuentas seleccionando un boton u otro.

En resumen, podemos almacenar y actualizar facilmente una URL externa en una app bancaria, permitiendo una mejor interaccion con el usuario y una mejor funcionalidad.

*/