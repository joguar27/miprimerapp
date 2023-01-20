import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <article key={producto.id} className="product-card">
      <h3 className="product-card__title">{producto.title}</h3>
      <img className="product-card__img"
        src={`https://picsum.photos/200/300?random=${producto.id}`}
        alt={producto.title}
      />
        <p>{producto.price}</p>
        {/* <button>Ver mas...</button> */}
        {/* <a href={"/productos/" + producto.id}>Ver mas...</a> */}
        {/* <a></a> */}
        <Link to={"/item/" + producto.id}>Ver mas...</Link>
    </article>
  );
};

export default Item;




// import React from 'react'

// const Item = () => {
//   return (
//     <div>Item</div>
//   )
// }

// export default Item