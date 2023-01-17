//import { Button } from "react-bootstrap"
import ItemListContainer from "./ItemListContainer"
import { Route, Routes } from "react-router-dom"

const Main = () => {
    return (
        <main>
            {/* <h2>JOGUAR PET SHOP</h2> */}
            {/* <ItemListContainer/> */}
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/productos/:categoria" element={<ItemListContainer/>}/>
                {/* <Route path="/electronicos" element={<p>ELECTRONICOS</p>}/> */}
                {/* <Route path="/ropa" element={<p>ROPA</p>}/> */}
            </Routes>
        </main>
    )
}
export default Main


