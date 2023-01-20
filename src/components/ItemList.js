import Item from "./Item"

const ItemList = ({productos}) => {
  return (
    <section className="product-container">
      {productos.map((producto) => {
        //console.log(producto)
        return (
          <Item producto={producto} key={producto.id} />
          //   <article key={producto.id}>
          //     <h4>{producto.title}</h4>
          //   </article>
        );
      })}
    </section>
  );
};

export default ItemList;
