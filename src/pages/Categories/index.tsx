import ProductList from "../../components/ProductList";
import {
  useGetActionGamesQuery,
  useGetFightingGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportsGamesQuery,
  useGetRPGGamesQuery,
} from "../../services/api";

const Categories = () => {
  const { data: actionGames, isLoading: actionLoading } =
    useGetActionGamesQuery();
  const { data: sportGames, isLoading: sportLoading } =
    useGetSportsGamesQuery();
  const { data: figthGames, isLoading: fightLoading } =
    useGetFightingGamesQuery();
  const { data: rpgGames, isLoading: rpgLoading } = useGetRPGGamesQuery();
  const { data: simulationGames, isLoading: simulationLoading } =
    useGetSimulationGamesQuery();

  return (
    <>
      <ProductList
        games={actionGames}
        title="Ação"
        background="black"
        id="action"
        isLoading={actionLoading}
      />
      <ProductList
        games={sportGames}
        title="Esportes"
        background="gray"
        id="sports"
        isLoading={sportLoading}
      />
      <ProductList
        games={figthGames}
        title="Luta"
        background="black"
        id="fight"
        isLoading={fightLoading}
      />
      <ProductList
        games={rpgGames}
        title="RPG"
        background="gray"
        id="rpg"
        isLoading={rpgLoading}
      />
      <ProductList
        games={simulationGames}
        title="Simulação"
        background="black"
        id="simulation"
        isLoading={simulationLoading}
      />
    </>
  );
};

export default Categories;
