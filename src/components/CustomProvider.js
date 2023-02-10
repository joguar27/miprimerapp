import { createContext, useContext, useEffect, useState } from "react";
import React from 'react'

export const contexto = createContext();
const Provider = contexto.Provider;

export const useCarrito = () => {
  const valorDelContexto = useContext(contexto);
  return valorDelContexto;
};

const CustomProvider = ({ children }) => {

  const [carrito, setCarrito] = useState([]);
  const [totalProductos, setTotalProductos] = useState(0);

  const agregarProducto = (producto, cantidad) => {

    //const copia = carrito.slice(0)
    //copia.push(producto)
    //const copia = [...carrito]
    //setCarrito(carrito=1)
    //setCarrito(carrito.push())
    //copia.push(producto)
    //setCarrito(copia)
  };

  const eliminarProducto = (id) => {};

  const vaciarCarrito = () => {
    //setCarrito([]);
  };

  const estaEnCarrito = (id) => {
    
  };

  const valorDelContexto = {
    carrito : carrito,
    totalProductos : totalProductos,
    setCarrito : setCarrito,
    setTotalProductos : setTotalProductos,
    agregarProducto : agregarProducto,
  };

  return <Provider value={valorDelContexto}>{children}</Provider>;
};

export default CustomProvider;



