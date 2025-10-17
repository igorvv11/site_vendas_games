import { useDispatch } from "react-redux";
import Button from "../Button";
import Tag from "../Tag";

import * as S from "./styles";

import { add, open } from "../../store/reducers/cart";
import { parsesToBrl } from "../../utils";

type Props = {
  game: Game;
};

const Hero = ({ game }: Props) => {
  const dispacth = useDispatch();
  const addToCart = () => {
    dispacth(add(game));
    dispacth(open());
  };

  return (
    <S.Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>
        <S.Infos>
          <h2>{game.name} </h2>
          <p>
            {game.prices.discount && (
              <span> De {parsesToBrl(game.prices.old)}</span>
            )}
            {game.prices.current && <>Por {parsesToBrl(game.prices.current)}</>}
          </p>
          {game.prices.current && (
            <Button
              type="button"
              title="Adicionar ao carrinho"
              variant="primary"
              onClick={addToCart}
            >
              Adicionar ao carrinho
            </Button>
          )}
        </S.Infos>
      </div>
    </S.Banner>
  );
};
export default Hero;
