import React from "react";
import ItemCount from "./ItemCount";
import { useParams } from "react-router-dom";

const ItemDetail = ({ producto, stock = 5 }) => {
  const onAdd = (parametro) => {
    console.log(parametro);
  };

  return (
    <div>
      <article key={producto.id} className="product-card">
        <h3 className="product-card__title">{producto.title}</h3>
        <img
          className="product-card__img"
          src={`https://picsum.photos/200/300?random=${producto.id}`}
          alt={producto.title}
        />
        <p>{producto.price}</p>
        {/* <Link to={"/item/" + producto.id}>Ver mas...</Link> */}
      </article>
    </div>
  );
};

export default ItemDetail;
