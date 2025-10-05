import ProductList from "../../components/ProductList";
import {
  useGetActionGamesQuery,
  useGetFightingGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportsGamesQuery,
  useGetRPGGamesQuery,
} from "../../services/api";

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery();
  const { data: sportGames } = useGetSportsGamesQuery();
  const { data: figthGames } = useGetFightingGamesQuery();
  const { data: rpgGames } = useGetRPGGamesQuery();
  const { data: simulationGames } = useGetSimulationGamesQuery();

  if (actionGames && sportGames && figthGames && rpgGames && simulationGames) {
    return (
      <>
        <ProductList
          games={actionGames}
          title="Ação"
          background="black"
          id="action"
        />
        <ProductList
          games={sportGames}
          title="Esportes"
          background="gray"
          id="sports"
        />
        <ProductList
          games={figthGames}
          title="Luta"
          background="black"
          id="fight"
        />
        <ProductList games={rpgGames} title="RPG" background="gray" id="rpg" />
        <ProductList
          games={simulationGames}
          title="Simulação"
          background="black"
          id="simulation"
        />
      </>
    );
  }
  return <h4>Carregando...</h4>;
};
export default Categories;
