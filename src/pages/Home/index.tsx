import Banner from "../../components/Banner";
import ProductList from "../../components/ProductList";

import { useGetOnSaleQuery, useGetSoonQuery } from "../../services/api";

export interface GalleryItem {
  type: "image" | "video";
  url: string;
}

export type Game = {
  id: number;
  name: string;
  description: string;
  release_date?: string;
  prices: {
    old?: number;
    discount?: number;
    current?: number;
  };
  details: {
    category: string;
    developer: string;
    publisher: string;
    system: string;
    languages: string[];
  };
  media: {
    cover: string;
    thumbnail: string;
    gallery: GalleryItem[];
  };
};

const Home = () => {
  const { data: onSaleGames } = useGetOnSaleQuery();
  const { data: soonGames } = useGetSoonQuery();
  if (onSaleGames && soonGames) {
    return (
      <>
        <Banner />
        <ProductList
          games={onSaleGames}
          title="Promoções"
          background="gray"
          id="on-sale"
        />
        <ProductList
          games={soonGames}
          title="Em breve"
          background="black"
          id="coming-soon"
        />
      </>
    );
  }
  return <h4>Carregando...</h4>;
};

export default Home;
