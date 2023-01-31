import React from "react";
import { NavLink } from "react-router-dom";
import { useCarrito } from "./CustomProvider";
import ItemCount from "./ItemCount";




const CartWidget = () => {
  
  const {totalProductos, setTotalProductos} = useCarrito()
  //console.log(valorDelContexto)
  // const handleComprar = () => {
  //   onAdd(contador)    

  return (
     <NavLink to="/carrito">
         <button onClick={()=>{
            setTotalProductos(totalProductos + 1)
         }}>Compraste</button>
       <span className="material-icons">shopping_cart</span>
       {totalProductos}
     </NavLink>
  );
};


export default CartWidget;
