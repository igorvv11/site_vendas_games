import Tag from "../Tag";

import Button from "../Button";

import { parsesToBrl } from "../../utils";
import { useGetFeatureGamesQuery } from "../../services/api";

import * as S from "./styles";

const Banner = () => {
  const { data: game } = useGetFeatureGamesQuery();

  if (!game) {
    return <h3>Carregando...</h3>;
  }

  return (
    <S.Image style={{ backgroundImage: `url(${game?.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <S.Title>{game.name}</S.Title>
          <S.Price>
            de<span>{parsesToBrl(game.prices.old)}</span>
            <br />
            por {parsesToBrl(game.prices.current)}
          </S.Price>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="clique aqui para aproveitar a oferta"
        >
          Aproveitar
        </Button>
      </div>
    </S.Image>
  );
};

export default Banner;
