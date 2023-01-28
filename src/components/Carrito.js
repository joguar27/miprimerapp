import React from "react";
//import { handleClick } from "./utils";
import { useState } from "react";



const Carrito = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");

  const handleClick = (e) => {
    console.log(nombre, email);
  };

  const handleChangeName = (e) => {
    setNombre(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <div>
        <input type="text" onChange={handleChangeName} placeholder="Nombre" />
      </div>
      <br />
      <div>
        <input type="text" onChange={handleChangeEmail} placeholder="Email" />
      </div>
      <br />
      <button onClick={handleClick}>Finalizar compra</button>
    </div>
  );
};

export default Carrito;
