import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Product {
  id: number;
  img: string;
  name: string;
  price: number;
  beforePrice?: number;
}

interface FavouritesState {
  items: Product[];
}

const initialState: FavouritesState = {
  items: [],
};

export const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addFavourite: (state, action: PayloadAction<Product>) => {
      if (!state.items.some((item) => item.id === action.payload.id)) {
        state.items.push(action.payload);
      }
    },
    deleteFavourite: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearFavourites: (state) => {
      state.items = [];
    },
  },
});

export const { addFavourite, deleteFavourite, clearFavourites } =
  favouritesSlice.actions;
export default favouritesSlice.reducer;
