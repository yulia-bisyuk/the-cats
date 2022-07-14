import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const catsApi = createApi({
  reducerPath: 'catsApi',

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.thecatapi.com/v1/',
    prepareHeaders: headers => {
      headers.set('x-api-key', '0b7504df-17ed-43ae-9368-17c81ca0668c');

      return headers;
    },
  }),
  tagTypes: ['Cats'],

  endpoints: builder => ({
    fetchRandomCat: builder.query({
      query: () => ({ url: `images/search` }),
      providesTags: ['Cats'],
    }),

    voting: builder.mutation({
      query: value => ({
        url: `votes`,
        method: 'POST',
        body: value,
      }),
      invalidatesTags: ['Cats'],
    }),

    getUserVotes: builder.query({
      query: value => ({
        url: `votes?q=${value}`,
      }),
      providesTags: ['Cats'],
    }),

    addToFavourites: builder.mutation({
      query: value => ({
        url: `favourites`,
        method: 'POST',
        body: value,
      }),
      invalidatesTags: ['Cats'],
    }),

    getUserFavourites: builder.query({
      query: value => ({
        url: `favourites?q=${value}`,
      }),
      providesTags: ['Cats'],
    }),

    // getImageById: builder.query({
    //   query: value => ({
    //     url: `images/${value}`,
    //   }),
    //   providesTags: ['Cats'],
    // }),

    // fetchBreedByName: builder.query({
    //   query: value => ({
    //     url: `breeds/search?q=${value}`,
    //     method: 'GET',
    //   }),
    //   providesTags: ['Cats'],
    // }),
  }),
});

export const {
  useFetchRandomCatQuery,
  useVotingMutation,
  useGetUserVotesQuery,
  useAddToFavouritesMutation,
  useGetUserFavouritesQuery,
  //   useGetImageByIdQuery,
  //   useFetchBreedByNameQuery,
} = catsApi;
