import React from "react";
//import { handleClick } from "./utils";
import { useState } from "react";
//import { db } from "../firebase";
//import CartWidget from "./CartWidget";
//import CustomProvider from "./CustomProvider";
//import ItemCount from "./ItemCount";



  const Carrito = () => {

  // const [cartItems, setCartItems] = useState([]);

  // const [productosWidget, setProductosWidget] = useState(0);  

  // const [precioTotal, setPrecioTotal] = useState(0);

  //   const addProduct = (item, cantidad) => {
  //     const productoExiste = cartItems.find((i) => i.item.id === item.id);
  //     if (!productoExiste) {
  //       setCartItems([...cartItems, { item, product }]);

  //       setProductosWidget(productosWidget + cantidad);

  //       setPrecioTotal(precioTotal + product.price * product.cantidad);

  //       else{
  //         setCartItems(cartItems.map(x=>{
  //           if(x.id === product.id){
  //             return {...x, cantidad:(x.cantidad + product.cantidad)}
  //           }
  //           else{
  //             return x
  //           }
  //         }
  //       }

  //     }





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
        <h3>Carrito</h3>
        {/* {Carrito.map()} */}
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
