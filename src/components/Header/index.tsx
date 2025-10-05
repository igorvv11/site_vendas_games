import { Link } from "react-router-dom";

import { HeaderBar, CartButton, Links, LinksItem } from "./styles";
import logo from "../../assets/images/logo.svg";
import carrinho from "../../assets/images/carrinho.svg";

import { open } from "../../store/reducers/cart";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../store";

const Header = () => {
  const dispatch = useDispatch();

  const { items } = useSelector((state: RootReducer) => state.cart);

  const openCart = () => {
    dispatch(open());
  };

  return (
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
      <CartButton onClick={openCart}>
        {items.length} - produto(s) <img src={carrinho} alt="Carrinho" />
      </CartButton>
    </HeaderBar>
  );
};

export default Header;
