import { HeaderBar, LinkCard, Links, LinksItem } from "./styles";
import logo from "../../assets/images/logo.svg";
import carrinho from "../../assets/images/carrinho.svg";

const Header = () => (
  <HeaderBar>
    <div>
      <img src={logo} alt="Logo EPLAY" />
      <nav>
        <Links>
          <LinksItem>
            <a href="#">Categorias</a>
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
