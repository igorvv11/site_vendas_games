import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Tag from "../Tag";
import Button from "../Button";

import { close, remove } from "../../store/reducers/cart";
import { RootReducer } from "../../store";

import { getTotalPrice, parsesToBrl } from "../../utils";
import * as S from "./styles";

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const closeCart = () => {
    dispatch(close());
  };
  const removeItem = (id: number) => {
    dispatch(remove(id));
  };

  const gotToCheckout = () => {
    navigate("/checkout");
    closeCart();
  };

  return (
    <S.CartContainer className={isOpen ? "is-open" : ""}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <S.CartItem key={item.id}>
                  <img src={item.media.thumbnail} alt={item.name} />
                  <div>
                    <h3>{item.name}</h3>
                    <Tag>{item.details.category}</Tag>
                    <Tag>{item.details.system}</Tag>
                    <span>{parsesToBrl(item.prices.current)}</span>
                  </div>
                  <button onClick={() => removeItem(item.id)} type="button" />
                </S.CartItem>
              ))}
            </ul>
            <S.Quantity> {items.length} jogo(s) no carrinho</S.Quantity>
            <S.Prices>
              Total de {parsesToBrl(getTotalPrice(items))}
              <span>Em até 6x sem juros</span>
            </S.Prices>
            <Button
              title="Clique aqui para finalizar sua compra"
              type="button"
              onClick={gotToCheckout}
            >
              Continuar a compra
            </Button>
          </>
        ) : (
          <p className="empty-cart">
            Seu carrinho está vazio, adicione pelomenos um jogo para continuar
            com a compra
          </p>
        )}
      </S.Sidebar>
    </S.CartContainer>
  );
};

export default Cart;
