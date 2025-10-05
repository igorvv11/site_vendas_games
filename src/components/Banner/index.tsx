import { Imagem, Preco, Titulo } from "./styles";
import Tag from "../Tag";

import Button from "../Button";
import { Game } from "../../pages/Home";
import { useEffect, useState } from "react";
import { formataPreco } from "../ProductList";

import { useGetFeatureGamesQuery } from "../../services/api";

const Banner = () => {
  const { data: game, isLoading } = useGetFeatureGamesQuery();

  if (!game) {
    return <h3>Carregando...</h3>;
  }

  return (
    <Imagem style={{ backgroundImage: `url(${game?.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Titulo>{game.name}</Titulo>
          <Preco>
            de<span>{formataPreco(game.prices.old)}</span>
            <br />
            por {formataPreco(game.prices.current)}
          </Preco>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="clique aqui para aproveitar a oferta"
        >
          Aproveitar
        </Button>
      </div>
    </Imagem>
  );
};

export default Banner;
