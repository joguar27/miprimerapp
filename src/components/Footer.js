import Nav from "./Nav"
const Footer=()=>{
    return (
        <footer>
            <p>&copy; 2022 | JOGUAR PET SHOP | Todos los derechos reservados</p>
            <Nav 
                textLinkFooter="facebook" 
                hrefLinkFooter="https://www.facebook.com/"
            />
            <Nav
            textLinkFooter="twitter"
            hrefLinkFooter="https://www.twitter.com/"
            />
        </footer>
    )
}
export default Footer



//textLinkFooter="Twitter" /linea 7
//hrefLinkFooter="https://www.facebook.com/" /linea 8