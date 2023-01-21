import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

    const [load, setLoad] = useState(false);
    const [productos, setProductos] = useState([]);

    const props = useParams()
    //console.log(props.categoria)

    useEffect(() => {

        // newPromise(()=>{
        //     setTimeout(()=>{
        //         setLoad(true)
        //     }, 2000)
        //     })
        // })

    const pedido = fetch("https://fakestoreapi.com/products")
    pedido
    .then((respuesta) => {
        const productos = (respuesta.json())        
        //console.log(productos)
        return productos
    })
    .then((productos) => {
        //console.log(productos)
        //productos.filter(props.categoria) si usamos archivo json
        setProductos(productos)
        setLoad(true)
    })
    .catch((error) => {
        console.log(error)
        })
    }, [props])
    
    return (
        <>
            {load ? "Bienvenido a Joguar Pet Shop" : "Cargando..."}
            <ItemList productos={productos}/>
            {/* {productos.map((producto) => {
                //console.log(producto)
                return (
                    <article key={producto.id}>
                        <h4>{producto.title}</h4>
                    </article>
                )
            })} */}
        </>
    )


//    const [cargo, setCargo] = useState(false);
//    const [productos, setProductos] = useState([]);
//    const [productosFiltrados, setProductosFiltrados] = useState([productos])

//    useEffect(() => {
//         setTimeout(() => {
            
//             const ejemploProductos = [
//                 {id: 1, nombre: "Televisor", precio: 100, categoria: "electronico"},
//                 {id: 2, nombre: "Pantalon", precio: 200, categoria: "ropa"},
//                 {id: 3, nombre: "Mouse", precio: 300, categoria: "electronico"}
//             ]

//             setCargo(true)
//             setProductos(ejemploProductos)
//             setProductosFiltrados(ejemploProductos)

//         }, 2000)
//     }, [])
   





    //const pf = [...productos]

//   const handleChandgeName = (e) => {
//         console.log(e.target.value)
//         const copia = productos.filter(producto=>{

//             return producto.nombre.toLowerCase().includes(e.target.value.toLowerCase())
//         })
//         setProductosFiltrados(copia)
//     }

//     const handleChangePrice = (e) => {
//         console.log(e.target.value)
//         const copia = productos.filter(productos=>{
//             return productos.precio > Number(e.target.value)
//         })
//         setProductosFiltrados(copia)
//     }

//     const handleChangeCategory = (e) => {
//         console.log(e.target.value)
//         const copia = productos.filter(producto=>{

//         })
//         setProductosFiltrados(copia)
//     }

//     const handleFilter = (e) => {
//         console.log(e.target.dataset.filter)
//         const copia = productos.filter(producto=>{
//             if(e.target.dataset.filter === "nombre" ){
//                 return producto.nombre.toLowerCase().includes(e.target.value.toLowerCase())
//             }
//             if(e.target.dataset.filter === "precio" ){
//                 return producto.precio > Number(e.target.value)
//             }
//             else{
//                 return producto.categoria === e.target.value
//             }
//         })
//         setProductosFiltrados(copia)     
//     }



//   return (
//     <section>
//         {!cargo ? "Cargando..." : "Bienvenido a Joguar Pet Shop"}
//         <nav>
//             <input data-filter="nombre" onChange={handleFilter} type="text"placeholder="Nombre del producto" />
//             <input data-filter="precio" onChange={handleFilter} type="number"placeholder="Mayor a" />
//             <select data-filter="categoria" onChange={handleFilter}>
//                 <option value="todos">Todos</option>
//                 <option value="electronico">Electronico</option>
//                 <option value="ropa">Ropa</option>
//             </select>
//         </nav>
//         {productosFiltrados.map(producto=>(
//             <article>
//                 <h2>{producto.nombre}</h2>
//                 <p>$ {producto.precio}</p>
//                 <p>{producto.categoria}</p>
//             </article>
//             ))}
//     </section>
//     );
}

export default ItemListContainer;


//contador de carrito
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
