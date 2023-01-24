import React from "react";
import ItemCount from "./ItemCount";
import { useParams } from "react-router-dom";

const ItemDetail = ({ producto, stock = 5 }) => {
  const onAdd = (parametro) => {
    console.log(parametro);
  };

  return (
    <div>
      <h3>Detalle del Producto | $ 8.000</h3>
      <article key={producto.id} className="product-card">
        <h4 className="product-card__title">{producto.title}</h4>
        <img
          className="product-card__img"
          src={`https://picsum.photos/200/300?random=${producto.id}`}
          alt={producto.title}
        />
        <p>{producto.price}</p>
        {/* <Link to={"/item/" + producto.id}>Ver mas...</Link> */}
      </article>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio qui
        corporis vitae, nihil non voluptatem consectetur, blanditiis sit quod
        nobis dolorum tempora illo aperiam eveniet. Accusamus odit provident
        dolorem cum. Quos aliquam molestiae aliquid, temporibus incidunt
        voluptas explicabo illo accusamus esse accusantium unde asperiores et
        deleniti sint fuga tempora qui!
      </p>
      <ItemCount />
      {/* <div>
        <button> + </button>
        <p> Cantidad: 1 </p>
        <button> - </button>
        <br />
        <button> Comprar </button>
      </div> */}
    </div>
  );
};

export default ItemDetail;
