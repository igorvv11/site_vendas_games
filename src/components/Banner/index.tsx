import { Imagem, Preco, Titulo } from "./styles";
import Tag from "../Tag";

import bannerImg from "../../assets/images/banner-homem-aranha.png";
import Button from "../Button";

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Tag size="big">Destaque do dia</Tag>
      <div>
        <Titulo>Marvel's Spider-Man: Miles Morales PS4 & PS5</Titulo>
        <Preco>
          <span> De R$ 250,00 </span>
          <br />
          por apenas R$ 99,90
        </Preco>
      </div>
      <Button
        type="link"
        to="/produto"
        title="clique aqui para aproveitar a oferta"
      >
        Aproveitar
      </Button>
    </div>
  </Imagem>
);

export default Banner;
