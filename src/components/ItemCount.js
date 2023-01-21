import React from 'react'
import { useState } from 'react'

const ItemCount = ({stock, onAdd}) => {

    const [contador, setContador] = useState(1)

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

    const handleConfirmar = () => {
        onAdd(contador)    
    }

    const handleResetear = () => {
        setContador(1)
    }

  return (
    <div>
        <button onClick={handleResetear}>Reset</button>
        <br />
        <button onClick={handleSumar}>+</button>
        <p>Cantidad : {contador}</p>
        <button onClick={handleRestar}>-</button>
        <br />
        <button onClick={handleConfirmar}>Comprar</button>
    </div>
  )
}

export default ItemCount
