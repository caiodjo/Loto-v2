import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface defaultGame {
  filtros: number[];
}

const initialState: defaultGame = {
  filtros: [],
};

const cartelaSlice = createSlice({
  name: "filtros",
  initialState,
  reducers: {
    addToFilter: (state, action: PayloadAction<number>) => {
      state.filtros = [...state.filtros, action.payload];
    },
    RemoveFromFilter: (state, action: PayloadAction<number>) => {
      state.filtros.splice(
        state.filtros.findIndex((el) => el === action.payload),
        1
      );
    },
    reset: (state) => {
      state.filtros = initialState.filtros;
    },
  },
});

export default cartelaSlice.reducer;
export const { addToFilter, RemoveFromFilter, reset } = cartelaSlice.actions;
