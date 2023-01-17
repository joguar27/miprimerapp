import Item from "./Item"

const ItemList = ({productos}) => {
  return (
    <div>
      {productos.map((producto) => {
        //console.log(producto)
        return (
          <Item producto={producto} key={producto.id} />
          //   <article key={producto.id}>
          //     <h4>{producto.title}</h4>
          //   </article>
        );
      })}
    </div>
  );
};

export default ItemList;
