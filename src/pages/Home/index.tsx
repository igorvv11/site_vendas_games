import Banner from "../../components/Banner";
import ProductList from "../../components/ProductList";
import Game from "../../models/Game";

import resident from "../../assets/images/resident.png";
import diablo from "../../assets/images/diablo.png";
import zelda from "../../assets/images/zelda.png";
import starwars from "../../assets/images/star_wars.png";

const promocoes: Game[] = [
  {
    id: 1,
    category: "Ação",
    description:
      "Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletronico de survival horror...",
    title: "Residente Evil 4",
    image: resident,
    infos: ["10%", "R$250,00"],
    system: "windowns",
  },
  {
    id: 2,
    category: "Ação",
    description:
      "Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletronico de survival horror...",
    title: "Residente Evil 4",
    image: resident,
    infos: ["5%", "R$290,00"],
    system: "PS5",
  },
  {
    id: 3,
    category: "Ação",
    description:
      "Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletronico de survival horror...",
    title: "Residente Evil 4",
    image: resident,
    infos: ["10%", "R$250,00"],
    system: "windowns",
  },
  {
    id: 4,
    category: "Ação",
    description:
      "Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletronico de survival horror...",
    title: "Residente Evil 4",
    image: resident,
    infos: ["10%", "R$250,00"],
    system: "windowns",
  },
];

const emBreve: Game[] = [
  {
    id: 5,
    category: "RPG",
    description:
      "Diblo IV é um RPG de ação em desevolvimento pela Blizzard Entretainment",
    title: "Diablo Iv",
    image: diablo,
    infos: ["17/05"],
    system: "windowns",
  },
  {
    id: 6,
    category: "RPG",
    description:
      "Diblo IV é um RPG de ação em desevolvimento pela Blizzard Entretainment",
    title: "Zelda",
    image: zelda,
    infos: ["17/05"],
    system: "windowns",
  },
  {
    id: 7,
    category: "RPG",
    description:
      "Diblo IV é um RPG de ação em desevolvimento pela Blizzard Entretainment",
    title: "Star Wars",
    image: starwars,
    infos: ["17/05"],
    system: "windowns",
  },
  {
    id: 8,
    category: "RPG",
    description:
      "Diblo IV é um RPG de ação em desevolvimento pela Blizzard Entretainment",
    title: "Resident Evil 4",
    image: resident,
    infos: ["17/05"],
    system: "=Nintendo Switch",
  },
];

const Home = () => (
  <>
    <Banner />
    <ProductList games={promocoes} title="Promoções" background="gray" />
    <ProductList games={emBreve} title="Em breve" background="black" />
  </>
);

export default Home;
