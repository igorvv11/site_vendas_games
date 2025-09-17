import Product from "../Product";
import { Container, List } from "./styles";

export type Props = {
  title: string;
  background: "gray" | "black";
};

const ProductList = ({ background, title }: Props) => (
  <Container background={background}>
    <div className="container">
      <h2>{title}</h2>
      <List>
        <Product
          category="Ação"
          description="teste"
          image="https://picsum.photos/222/250"
          infos={["-10%", "R$ 150 "]}
          system="Windowns"
          title="Nome do jogo"
        />
        <Product
          category="Ação"
          description="teste"
          image="https://picsum.photos/222/250"
          infos={["-10%", "R$ 150 "]}
          system="Windowns"
          title="Nome do jogo"
        />
        <Product
          category="Ação"
          description="teste"
          image="https://picsum.photos/222/250"
          infos={["-10%", "R$ 150 "]}
          system="Windowns"
          title="Nome do jogo"
        />
        <Product
          category="Ação"
          description="teste"
          image="https://picsum.photos/222/250"
          infos={["-10%", "R$ 150 "]}
          system="Windowns"
          title="Nome do jogo"
        />
      </List>
    </div>
  </Container>
);

export default ProductList;
