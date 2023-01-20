import React from 'react'
//import { handleClick } from './utils'

const Carrito = () => {


    const handleClick = (e) => {
        console.log(e.target)
    }

    const handleChange = (e) => {
        console.log(e.target)
    }

  return (
    <div>
        <input type="text" onChange={handleChange}/>
        <button onClick={handleClick}>Terminar compra</button>
    </div>
  )
}

export default Carrito
