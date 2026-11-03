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

    setBrands: (state, action) => {
      state.brands = action.payload;
    },

    setOffers: (state, action) => {
      state.offers = action.payload;
    },

    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },

    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setArticle,
  setSelectedBrand,
  setBrands,
  setOffers,
  setLoading,
  setError,
} = partsSlice.actions;

export default partsSlice.reducer;
