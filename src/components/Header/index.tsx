/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";

import { HashLink } from "react-router-hash-link";
import * as S from "./styles";
import logo from "../../assets/images/logo.svg";
import carrinho from "../../assets/images/carrinho.svg";

import { open } from "../../store/reducers/cart";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../store";
import { useState } from "react";

const Header = () => {
  const dispatch = useDispatch();

  const { items } = useSelector((state: RootReducer) => state.cart);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openCart = () => {
    dispatch(open());
  };

  return (
    <S.HeaderBar>
      <S.HeaderRow>
        <div>
          <S.Hamburger onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </S.Hamburger>
          <Link to="/">
            <h1>
              <img src={logo} alt="Logo EPLAY" />
            </h1>
          </Link>
          <nav>
            <S.Links>
              <S.LinksItem>
                <Link
                  title="clique aqui para acessar página de catergorias"
                  to="/categories"
                >
                  Categorias
                </Link>
              </S.LinksItem>
              <S.LinksItem>
                <HashLink
                  title="clique aqui para acessar seção de Em breve"
                  to="/#coming-soon"
                >
                  Em breve
                </HashLink>
              </S.LinksItem>
              <S.LinksItem>
                <HashLink
                  title="clique aqui para acessar seção de Promoções"
                  to="/#on-sale"
                >
                  Promoções
                </HashLink>
              </S.LinksItem>
            </S.Links>
          </nav>
        </div>
        <S.CartButton role="button" onClick={openCart}>
          {items.length} <span> - produto(s)</span>
          <img src={carrinho} alt="Carrinho" />
        </S.CartButton>
      </S.HeaderRow>
      <S.NavMobile className={isMenuOpen ? "is-open" : ""}>
        <S.Links>
          <S.LinksItem>
            <Link
              title="clique aqui para acessar página de catergorias"
              to="/categories"
              onClick={() => setIsMenuOpen(false)}
            >
              Categorias
            </Link>
          </S.LinksItem>
          <S.LinksItem>
            <HashLink
              title="clique aqui para acessar seção de Em breve"
              to="/#coming-soon"
              onClick={() => setIsMenuOpen(false)}
            >
              Em breve
            </HashLink>
          </S.LinksItem>
          <S.LinksItem>
            <HashLink
              title="clique aqui para acessar seção de Promoções"
              to="/#on-sale"
              onClick={() => setIsMenuOpen(false)}
            >
              Promoções
            </HashLink>
          </S.LinksItem>
        </S.Links>
      </S.NavMobile>
    </S.HeaderBar>
  );
};

export default Header;
