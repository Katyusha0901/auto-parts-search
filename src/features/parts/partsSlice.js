import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  article: "",
  brands: [],
  selectedBrand: null,
  offers: [],
  isLoading: false,
  error: null,
};

const partsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setArticle: (state, action) => {
      state.article = action.payload;
    },

    setSelectedBrand: (state, action) => {
      state.selectedBrand = action.payload;
    },
  },
});
