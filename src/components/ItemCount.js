import React from 'react'
import { useState } from 'react'



const ItemCount = ({stock, onAdd}) => {

    const [contador, setContador] = useState(1)

    //onAdd(contador)

    const handleSumar = () => {
        if (contador < stock){
            //contador = contador + 1
            setContador(contador + 1)
        }
    }

    const handleRestar = () => {
        //contador = contador - 1
            setContador(contador - 1)
    }

    const handleComprar = () => {
            onAdd(contador)    
    }

    const handleResetear = () => {
            setContador(1)
    }

  return (
    <div>
        <button onClick={handleResetear}> Resetear </button>
        <br />
        <button onClick={handleSumar}> + </button>
        <p>Cantidad : {contador}</p>
        <button onClick={handleRestar}> - </button>
        <br />
        <button onClick={handleComprar}> Comprar </button>
    </div>
  )
}

export default ItemCount
