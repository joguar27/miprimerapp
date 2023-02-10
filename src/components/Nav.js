import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import { contexto } from "./CustomProvider";

const Nav = (props) => {
 
  const { isHeader, textLinkFooter, hrefLinkFooter } = props;

  const { totalProductos } = useContext(contexto);


  if (isHeader) {
    return (
      <nav className="header__navbar">
        <NavLink className="header__link" to="category/electronics">
          ELECTRONICA
        </NavLink>
        <NavLink className="header__link" to="category/men's clothing">
          ROPA HOMBRE
        </NavLink>
        <NavLink className="header__link" to="category/jewelery">
          JOYERIA
        </NavLink>
        <NavLink className="header__link" to="category/women's clothing">
          ROPA MUJER
        </NavLink>
        {/* <NavLink to="/carrito">
          <span className="material-icons">shopping_cart</span>
          {totalProductos}
        </NavLink> */}
        <CartWidget />
      </nav>
    );
  } else {
    return (
      <nav className="header__navbar">
        <a href={props.hrefLinkFooter}>{props.textLinkFooter}</a>
      </nav>
    );
  }
};

export default Nav;



