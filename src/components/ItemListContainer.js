import { useEffect, useState } from "react";

const ItemListContainer = (props) => {
   const [cargo, setCargo] = useState(false);
   const [productos, setProductos] = useState([]);

   useEffect(() => {
        setTimeout(() => {
            
            const ejemploProductos = [
                {id: 1, nombre: "Producto 1", precio: 100},
                {id: 2, nombre: "Producto 2", precio: 200},
                {id: 3, nombre: "Producto 3", precio: 300}
            ]

            //const copiaProductos = [...productos]
            //const copiaProductos = productos.slice()

            // ejemploProductos.forEach((producto) => {
            //     //productos.push(producto)
            //     copia.push(producto)
            // })

            setCargo(true);
            setProductos(ejemploProductos)
            //setProductos(copiaProductos)

        }, 2000)
    }, [])
   

  return (
    <div>
        {!cargo ? ("Cargando...") : ("Bienvenido a Joguar Pet Shop")}
    </div>
    );
}

export default ItemListContainer;

//asi se haria con js :
// let contador = 0 | panel de contador con un numero
// const p = document.querySelector("p") | llamar al p
// const button = document.querySelector("button") | llamar al boton

// button.addEventListener("click", () => { | ponerle el click al boton
//     contador++ | cuando haga click se sume
//    p.innerText = contador | y se le agrege el texto
//})

// asi se haria con react :
// const ItemListContainer = (props) => {
// const [carrito, setCarrito] = useState(0)
// const handleClick = () => {
//     setCarrito(carrito + 1)
// }

// return (
//     <div>
//         {props.greeting}
//         <p>Carrito : {carrito}</p>
//         <button onClick={handleClick}>sumar</button>
//     </div>
// )
// }
