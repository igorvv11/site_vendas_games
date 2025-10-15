import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Game } from "../pages/Home";

type Product = {
  id: number;
  price: number;
};

type PurchasePayload = {
  products: [Product];
  billing: {
    name: string;
    email: string;
    document: string;
  };
  delivery: {
    email: string;
  };
  payment: {
    card: {
      active: boolean;
      owner?: {
        name: string;
        document: string;
      };
      name?: string;
      number?: string;
      expires?: {
        month: number;
        year: number;
      };
      code?: number;
    };
    installments: number;
  };
};

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api-ebac.vercel.app/api/eplay",
  }),
  endpoints: (builder) => ({
    getFeatureGames: builder.query<Game, void>({
      query: () => "/destaque",
    }),
    getOnSale: builder.query<Game[], void>({
      query: () => "/promocoes",
    }),
    getSoon: builder.query<Game[], void>({
      query: () => "/em-breve",
    }),
    getActionGames: builder.query<Game[], void>({
      query: () => "/acao",
    }),
    getSportsGames: builder.query<Game[], void>({
      query: () => "/esportes",
    }),
    getSimulationGames: builder.query<Game[], void>({
      query: () => "/simulacao",
    }),
    getFightingGames: builder.query<Game[], void>({
      query: () => "/luta",
    }),
    getRPGGames: builder.query<Game[], void>({
      query: () => "/rpg",
    }),
    getGameById: builder.query<Game, string>({
      query: (id) => `/jogos/${id}`,
    }),
    purchase: builder.mutation<any, PurchasePayload>({
      query: (body) => ({
        url: `checkout`,
        method: "POST",
        body,
      }),
    }),
  }),
});
export default api;
export const {
  useGetFeatureGamesQuery,
  useGetOnSaleQuery,
  useGetSoonQuery,
  useGetActionGamesQuery,
  useGetSportsGamesQuery,
  useGetSimulationGamesQuery,
  useGetFightingGamesQuery,
  useGetRPGGamesQuery,
  useGetGameByIdQuery,
  usePurchaseMutation,
} = api;
