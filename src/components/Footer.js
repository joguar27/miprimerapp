import Nav from "./Nav";

const Footer = () => {


  return (
    <footer>
      <p>&copy; 2023 | JOGUAR SHOP | Todos los derechos reservados.</p>
      <Nav
        textLinkFooter="facebook"
        hrefLinkFooter="https://www.facebook.com/"
      />
      <Nav textLinkFooter="twitter" hrefLinkFooter="https://www.twitter.com/" />
      <Nav
        textLinkFooter="instagram"
        hrefLinkFooter="https://www.instagram.com/"
      />
    </footer>
  );
};
export default Footer;
