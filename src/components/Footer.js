import { useCarrito } from "./CustomProvider";
import Nav from "./Nav"

const Footer = () => {

// const {totalProductos} = useCarrito()

  return (
    <footer>
      {/* {totalProductos} */}
      <p>&copy; 2023 | JOGUAR PET SHOP | Todos los derechos reservados.</p>
      <Nav
        textLinkFooter="facebook"
        hrefLinkFooter="https://www.facebook.com/"
      />
      <Nav
        textLinkFooter="twitter"
        hrefLinkFooter="https://www.twitter.com/"
      />
      <Nav
        textLinkFooter="instagram"
        hrefLinkFooter="https://www.instagram.com/"
      />
    </footer>
  )
}
export default Footer;

