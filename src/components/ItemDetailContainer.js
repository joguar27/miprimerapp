import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {


  const [load, setLoad] = useState(false);
  const [product, setProduct] = useState({});

  const { id } = useParams();
  

  useEffect(() => {
    const prods = fetch(`https://fakestoreapi.com/products/${id}`);

    prods
      .then((res) => res.json())
      .then((data) => setProduct(data), setLoad(true))
      .catch((err) => console.log(err))
      .finally(() => {
        //console.log("Promise completed");
      });
  }, [id]);

  return (
    <>
      {load ? <ItemDetail producto={product} /> : <h1>Cargando productos</h1>}
    </>
  );
}

export default ItemDetailContainer;
