// Un ejemplo de cómo utilizar useState en un formulario podría ser el siguiente:

import { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // Aquí podríamos enviar los datos del formulario a una API o procesarlos de alguna otra manera.
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input type="text" name="name" onChange={handleChange} />
      </label>
      <br />
      <label>
        Correo electrónico:
        <input type="email" name="email" onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
}

//En este ejemplo estamos utilizando useState para guardar los datos del formulario en un objeto formData. Cada vez que el usuario ingresa o cambia algún valor en un campo del formulario, se ejecuta la función handleChange que actualiza el estado de formData con el nuevo valor.

//Al enviar el formulario, la función handleSubmit se ejecuta y previene el comportamiento por defecto del formulario, luego imprime en consola los datos del formulario, pero generalmente se enviaria los datos a una API o se procesaria de alguna manera.

//Con useState, podemos mantener el estado del formulario y actualizarlo automáticamente cada vez que el usuario ingresa o cambia algún valor, lo que facilita la manipulación y el procesamiento de los datos del formulario en nuestra aplicación.