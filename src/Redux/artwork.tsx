import {createSlice} from "@reduxjs/toolkit";
import {
  StateProps,
  ArtworkInt,
  ArtWorkProps,
  ErrorProps,
} from "Utils/interfaces";

const initialState: StateProps = {
  artworks: [],
  artwork: null,
  error: null,
};

export const artworkSlice = createSlice({
  name: "artworks",
  initialState,
  reducers: {
    setArtworks: (state, {payload}: {payload: ArtworkInt[]}) => {
      state.artworks = [...state.artworks, ...payload];
    },
    setArtwork: (state, {payload}: {payload: ArtWorkProps}) => {
      state.artwork = payload;
    },
    errorMessage: (state, {payload}: {payload: ErrorProps}) => {
      state.error = payload;
    },
  },
});

export const {setArtwork, setArtworks, errorMessage} = artworkSlice.actions;

export default artworkSlice.reducer;
