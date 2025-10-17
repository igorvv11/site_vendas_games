import styled from "styled-components";
import { colors } from "../../styles";
import { TagContainer } from "../Tag/styles";
import cartIcon from "../../assets/images/fechar.png";
import { ButtonContainer } from "../Button/styles";

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`;

export const Sidebar = styled.aside`
  z-index: 1;
  background-color: ${colors.gray};
  padding: 40px 16px 0 16px;
  max-width: 360px;
  width: 100%;

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
    margin-top: 32px;
  }

  .empty-cart {
    font-size: 14px;
    line-height: 22px;
    color: ${colors.white};
    text-align: center;
  }
`;

export const Prices = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${colors.white};
  margin-bottom: 24px;

  span {
    display: block;
    font-size: 12px;
    color: ${colors.ligthGray};
  }
`;

export const Quantity = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: ${colors.white};
  margin-top: 32px;
  margin-bottom: 16px;
`;

export const CartItem = styled.li`
  display: flex;
  border-bottom: 1px solid ${colors.ligthGray};
  padding: 8px 0;
  position: relative;
  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 24px;
  }
  h3 {
    font-size: 16px;
    font-weight: bold;
    color: ${colors.white};
  }

  span {
    display: block;
    font-size: 14px;
    color: ${colors.white};
    font-weight: bold;
  }
  ${TagContainer} {
    margin-right: 8px;
    margin-top: 8px;
    margin-bottom: 16px;
  }

  button {
    background-image: url(${cartIcon});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    position: absolute;
    top: 8px;
    right: 0;
  }
`;
