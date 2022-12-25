import{useState} from "react"

//import { unmountComponentAtNode } from "react-dom"

const ItemListContainer = (props) => {

//variables de estado(estado de un compnente | state): son
//variables que mantienen valores en un componente. 
//En componentes de tipo funcion, se crean con hoooks.  
//En componentes de tipo clase, se crean con this.state =

//Hooks: son funciones que nos permiten tener una nueva
//funcionalidad adentro del componente.

//let loading = true
//let res = []
//let error = ""
//let contador = 0
//contador = 1

//const miEstado = useState(0)
//const contador = miEstado[0]
//const cambiarContador = miEstado[1]

//console.log("🚀 ~ file: ItemListContainer.js:21 ~ ItemListContainer ~ miEstado", miEstado)
//console.log(miEstado)

const [contador, setContador] = useState(0)

//cambiarContador(1) | Asincronico.
//contador = 1 | Sincronico. | no se puede hacer | no se cambia
//el valor de una variable de estado directamente.

//const handleClick = () => {}
//const button = document.querySelector("button")
//button.addEventListener("click", () => {})
//button.addEventListener("click", handleClick)

const handleClick = () => {
    //console.log("click")
    //contador++
    //contador = contador + 1
    //setContador(contador++)
    //contador + = 1
    //setContador(contador + = 1)
    //console.log(contador + 1)
    setContador(contador + 1)
}

    return (
        <div>
            {props.greeting}
            <p>Contador : {contador}</p>
            <button onClick={handleClick} >sumar</button>
        </div>
    )
}
export default ItemListContainer

//asi se haria con js :
// let contador = 0 | panel de contador con un numero
// const p = document.querySelector("p") | llamar al p
// const button = document.querySelector("button") | llamar al boton

// button.addEventListener("click", () => { | ponerle el click al boton
//     contador++ | cuando haga click se sume
//    p.innerText = contador | y se le agrege el texto 
// })