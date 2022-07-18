import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const catsApi = createApi({
  reducerPath: "catsApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.thecatapi.com/v1/",
    prepareHeaders: (headers) => {
      headers.set("x-api-key", "0b7504df-17ed-43ae-9368-17c81ca0668c");

      return headers;
    },
  }),
  tagTypes: ["Cats"],

  endpoints: (builder) => ({
    fetchRandomCat: builder.query({
      query: () => ({ url: `images/search` }),
      providesTags: ["Cats"],
    }),

    voting: builder.mutation({
      query: (value) => ({
        url: `votes?q=${value}`,
        method: "POST",
        body: value,
      }),
      invalidatesTags: ["Cats"],
    }),

    addToFavourites: builder.mutation({
      query: (value) => ({
        url: `favourites`,
        method: "POST",
        body: value,
      }),
      invalidatesTags: ["Cats"],
    }),

    getUserFavourites: builder.query({
      query: (value) => ({
        url: `favourites?q=${value}`,
      }),
      providesTags: ["Cats"],
    }),

    deleteFromFavourites: builder.mutation({
      query: (value) => ({
        url: `favourites/${value}`,
        method: "DELETE",
        body: value,
      }),
      invalidatesTags: ["Cats"],
    }),

    getImageById: builder.query({
      query: (value) => ({
        url: `images/${value}`,
      }),
      providesTags: ["Cats"],
    }),

    getImagesForBreed: builder.query({
      query: (value) => ({
        url: `images/search?breed_id=${value}&limit=5`,
      }),
      providesTags: ["Cats"],
    }),

    getBreedByName: builder.query({
      query: (value) => ({
        url: `breeds/search?q=${value}`,
      }),
      providesTags: ["Cats"],
    }),
  }),
});

export const {
  useFetchRandomCatQuery,
  useVotingMutation,
  useAddToFavouritesMutation,
  useGetUserFavouritesQuery,
  useDeleteFromFavouritesMutation,
  useGetImagesForBreedQuery,
  useGetImageByIdQuery,
  useGetBreedByNameQuery,
} = catsApi;
