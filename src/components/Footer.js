import Nav from "./Nav";
const Footer = () => {
  return (
    <footer>
      <p>&copy; 2022 | JOGUAR PET SHOP | Todos los derechos reservados.</p>
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

      {/* <li>
        <a href="https://www.twitter.com/" target="blank"
            ><i class="fa-brands fa-twitter"></i>
        </a>
        </li> */}
    </footer>
  );
};
export default Footer;

//textLinkFooter="Twitter" /linea 7
//hrefLinkFooter="https://www.facebook.com/" /linea 8
