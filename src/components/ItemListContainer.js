import{useState} from "react"




const ItemListContainer = (props) => {
//    const [contador, setContador] = useState(0)
//    const handleClick = () =>{
//        setContador(contador + 1)
//    }
    return (
        <div>
            {props.greeting}
            <p>Contador : {contador}</p>
            <button onClick={handleClick}>sumar</button>
        </div>
    )
}
export default ItemListContainer









let contador = 0
const p = document.querySelector("p")
const button = document.querySelector("button")

button.addEventListener("click", () => {
    contador++
    p.innerText=contador

})