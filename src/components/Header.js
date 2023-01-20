import { Link, NavLink } from "react-router-dom";
import Nav from "./Nav";

const Header = ({ children }) => {
  const isHeader = true;

  return (
    <>
      <header className="header">
        <NavLink to="/">
          <h1 className="header__title">JOGUAR</h1>
        </NavLink>
          {children}
        <Nav isHeader={isHeader} />
      </header>
    </>
  );
};

export default Header;

//{/*Nav({isHeader: true})*/}
