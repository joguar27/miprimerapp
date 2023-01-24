//import { Button } from "react-bootstrap"
import ItemListContainer from "./ItemListContainer"
import { Route, Routes } from "react-router-dom"
import ItemDetailContainer from "./ItemDetailContainer"
import Carrito from "./Carrito"

const Main = () => {
    return (
        <main>
            <h2>JOGUAR SHOP</h2>
            {/* <ItemListContainer/> */}
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/category/:categoria" element={<ItemListContainer/>}/>
                <Route path="/item/:id" element={<ItemDetailContainer/>}/>
                <Route path="/carrito" element={<Carrito/>}/>
                {/* <Route path="*" element={<NotFound/>}/> */}
                {/* <Route path="/electronicos" element={<p>ELECTRONICOS</p>}/> */}
                {/* <Route path="/ropa" element={<p>ROPA</p>}/> */}
            </Routes>
        </main>
    )
}
export default Main


