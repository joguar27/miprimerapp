import React from "react";
//import { handleClick } from "./utils";
import { useState } from "react";
import { db } from "../firebase";
import CartWidget from "./CartWidget";
import CustomProvider from "./CustomProvider";
import ItemCount from "./ItemCount";



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

  console.log("Render Carrito")

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

export default Carrito
