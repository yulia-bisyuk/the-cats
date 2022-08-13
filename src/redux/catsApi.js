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
        url: `images/search?breed_id=${value.id}&limit=${value.limit}&order=${value.order}&include_breeds=true`,
      }),
      providesTags: ["Cats"],
    }),

    getBreedByName: builder.query({
      query: (value) => ({
        url: `breeds/search?q=${value}`,
      }),
      providesTags: ["Cats"],
    }),

    getBreedById: builder.query({
      query: (value) => ({
        url: `breeds/${value}`,
      }),
      providesTags: ["Cats"],
    }),

    getAllBreeds: builder.query({
      query: () => ({
        url: `breeds`,
      }),
      providesTags: ["Cats"],
    }),

    getAllImages: builder.query({
      query: (value) => ({
        url: `images/search?limit=${value.limit}&order=${value.order}&include_breeds=true`,
      }),
      providesTags: ["Cats"],
    }),

    getUploadedImages: builder.query({
      query: () => ({
        url: `images`,
      }),
      providesTags: ["Cats"],
    }),

    deleteUploadedImage: builder.mutation({
      query: (value) => ({
        url: `/images/${value}`,
        method: "DELETE",
        body: value,
      }),
      invalidatesTags: ["Cats"],
    }),

    // ????
    // uploadImage: builder.mutation({
    //   query: (value) => ({
    //     url: `images/upload?file=${value.file}&sub_id=${value.id}`,
    //     method: "POST",

    //     headers: (headers) => {
    //       headers.set("Content-Type", "multipart/form-data");
    //     },
    //     body: value,
    //   }),
    //   invalidatesTags: ["Cats"],
    // }),
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
  useGetBreedByIdQuery,
  useGetAllBreedsQuery,
  useGetAllImagesQuery,
  useGetUploadedImagesQuery,
  useDeleteUploadedImageMutation,
  // useUploadImageMutation,
} = catsApi;
