import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ titulo, imagen, desc, stock = 5 }) => {

  //const { setCarrito } = useCarrito();

  const onAdd = (parametro) => {
    console.log(parametro);
  };

  return (
    <div>
      <h3>Detalle del Producto 1 - $ 8.000</h3>
      {/* picsum */}
      <img src="https://picsum.photos/200/300" alt="picsum" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id error culpa
        illo, facilis voluptas praesentium fugiat ipsum vel, dolorem neque quod.
        Rerum quis dolorem aperiam ipsa, tempora facilis quae beatae?
      </p>
      <ItemCount stock={stock} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetail;
