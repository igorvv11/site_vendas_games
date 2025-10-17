import Banner from "../../components/Banner";
import ProductList from "../../components/ProductList";

import { useGetOnSaleQuery, useGetSoonQuery } from "../../services/api";

const Home = () => {
  const { data: onSaleGames, isLoading: onSaleLoading } = useGetOnSaleQuery();
  const { data: soonGames, isLoading: soonLoading } = useGetSoonQuery();
  return (
    <>
      <Banner />
      <ProductList
        games={onSaleGames}
        title="Promoções"
        background="gray"
        id="on-sale"
        isLoading={onSaleLoading}
      />
      <ProductList
        games={soonGames}
        title="Em breve"
        background="black"
        id="coming-soon"
        isLoading={soonLoading}
      />
    </>
  );
};

export default Home;
