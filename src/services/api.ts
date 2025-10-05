import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Game } from "../pages/Home";

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://ebac-fake-api.vercel.app/api/eplay",
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
} = api;
