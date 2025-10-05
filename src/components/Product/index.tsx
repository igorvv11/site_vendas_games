import Tag from "../Tag";
import { Card, Descricao, Infos, Titulo } from "./styles";

type Props = {
  title: string;
  category: string;
  system: string;
  description: string;
  infos: string[];
  image: string;
  id: number;
};

const Product = ({
  category,
  description,
  image,
  infos,
  system,
  title,
  id,
}: Props) => {
  const getDescription = (description: string) => {
    if (description.length > 95) {
      return description.slice(0, 92).concat("...");
    }
    return description;
  };
  return (
    <Card to={`/product/${id}`}>
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img src={image} alt={title} />
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <Titulo>{title}</Titulo>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>
      <Descricao>{getDescription(description)}</Descricao>
    </Card>
  );
};

export default Product;
