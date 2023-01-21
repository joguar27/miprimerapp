import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import { contexto } from "./CustomProvider";

const Nav = (props) => {
  //const { isHeader : isHeader } = props
  const { isHeader, textLinkFooter, hrefLinkFooter } = props;

  const { totalProductos } = useContext(contexto)
  //console.log(valorDelContexto)

  // const isHeader = props.isHeader || false
  // const textLinkFooter = props.textLinkFooter || ""
  // const hrefLinkFooter = props.hrefLinkFooter || ""

  if (isHeader) {
    return (
      <nav className="header__navbar">
        <NavLink className="header__link" to="/productos/caninos">
          CANINOS
        </NavLink>
        <NavLink className="header__link" to="/productos/felinos">
          FELINOS
        </NavLink>
        <CartWidget />
      </nav>
    )
  } else {
    return (
      <nav className="header__navbar">
        <a href={props.hrefLinkFooter}>{props.textLinkFooter}</a>
      </nav>
    );
  }
};

export default Nav;

//(props) /linea 1
//<span className="material-icons">shopping_cart</span> /linea 17
