import { Link } from "react-router-dom";

import { HeaderBar, LinkCard, Links, LinksItem } from "./styles";
import logo from "../../assets/images/logo.svg";
import carrinho from "../../assets/images/carrinho.svg";

const Header = () => (
  <HeaderBar>
    <div>
      <Link to="/">
        <img src={logo} alt="Logo EPLAY" />
      </Link>
      <nav>
        <Links>
          <LinksItem>
            <Link to="/categories">Categorias</Link>
          </LinksItem>
          <LinksItem>
            <a href="#">Novidades</a>
          </LinksItem>
          <LinksItem>
            <a href="#">Promoções</a>
          </LinksItem>
        </Links>
      </nav>
    </div>
    <LinkCard href="#">
      0 - produto(s) <img src={carrinho} alt="Carrinho" />
    </LinkCard>
  </HeaderBar>
);

export default Header;
