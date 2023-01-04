import { Button } from "react-bootstrap"
import ItemListContainer from "./ItemListContainer"

const Main = () => {
    return (
        <main>
            <h2>JOGUAR PET SHOP</h2>
            <p><ItemListContainer greeting="Bienvenido Jorge, que necesitas hoy para tu mascota?"/></p>
            {/*<img src="https://picsum.photos/200/300"/>*/}
            {/*<ItemListContainer/>*/}
        </main>
    )
}
export default Main


