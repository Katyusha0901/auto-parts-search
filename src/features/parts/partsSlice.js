import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  article: "",
  brands: [],
  selectedBrand: null,
  offers: [],
  isBrandsLoading: false,
  isOffersLoading: false,
  brandsError: null,
  offersError: null,
  isOffersLoaded: false,
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

    setBrandsLoading: (state, action) => {
      state.isBrandsLoading = action.payload;
    },

    setOffersLoading: (state, action) => {
      state.isOffersLoading = action.payload;
    },

    setBrandsError: (state, action) => {
      state.brandsError = action.payload;
    },

    setOffersError: (state, action) => {
      state.offersError = action.payload;
    },

    setOffersLoaded: (state, action) => {
      state.isOffersLoaded = action.payload;
    },
  },
});

export const {
  setArticle,
  setSelectedBrand,
  setBrands,
  setOffers,
  setBrandsLoading,
  setOffersLoading,
  setBrandsError,
  setOffersError,
  setOffersLoaded,
} = partsSlice.actions;

export default partsSlice.reducer;
