const Nav = (props) => {
  //const { isHeader : isHeader } = props
  const { isHeader, textLinkFooter, hrefLinkFooter } = props;

  // const isHeader = props.isHeader || false
  // const textLinkFooter = props.textLinkFooter || ""
  // const hrefLinkFooter = props.hrefLinkFooter || ""

  if (isHeader) {
    return (
      <nav className="header__navbar">
        <a className="header__link" href="#">
          INICIO
        </a>
        <a className="header__link" href="#">
          PRODUCTOS
        </a>
        <a className="header__link" href="#">
          CONTACTO
        </a>
        <a href="#">
          <span className="counter-cart">100</span>
          <span className="material-icons">shopping_cart</span>
        </a>
        {/* <a className="contador__carrito" href="#">0</a> */}
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

//(props) /linea 1
//<span className="material-icons">shopping_cart</span> /linea 17
