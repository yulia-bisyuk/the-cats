import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export const catsDetailsSlice = createSlice({
  name: "catsDetails",

  initialState: {
    userRequest: "",
    likedImages: [],
    dislikedImages: [],
  },

  reducers: {
    submit(state, action) {
      state.userRequest = action.payload;
    },

    getLikedImages(state, action) {
      state.likedImages = [...state.likedImages, { url: action.payload }];
    },

    getDislikedImages(state, action) {
      state.dislikedImages = [...state.dislikedImages, { url: action.payload }];
    },
  },
});

const persistConfig = {
  key: "auth",
  storage,
  blacklist: ["userRequest"],
};

export const persistedCatsDetailsReducer = persistReducer(
  persistConfig,
  catsDetailsSlice.reducer
);

export const { submit } = catsDetailsSlice.actions;
export const { getLikedImages } = catsDetailsSlice.actions;
export const { getDislikedImages } = catsDetailsSlice.actions;

export const getBreedRequestValue = (state) => state.catsDetails.userRequest;
export const getLikedImageslValue = (state) => state.catsDetails.likedImages;
export const getDislikedImageslValue = (state) =>
  state.catsDetails.dislikedImages;
