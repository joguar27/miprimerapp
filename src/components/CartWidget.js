import React from "react";
import { NavLink } from "react-router-dom";
import { useCarrito } from "./CustomProvider";

const CartWidget = () => {

  const { totalProductos, setTotalProductos } = useCarrito()

  return (
    <NavLink to="/carrito">
        {/* <button onClick={()=>{
            setTotalProductos(totalProductos + 1)
        }}>Test</button> */}
      <span className="material-icons">shopping_cart</span>
      {totalProductos}
    </NavLink>
  );
};

export default CartWidget;
