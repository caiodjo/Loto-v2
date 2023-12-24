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
    filtrarNumeros: (state, action: PayloadAction<number>) => {
      state.filtros = [...state.filtros, action.payload];
    },
    reset: (state) => {
      state.filtros = initialState.filtros;
    },
  },
});

export default cartelaSlice.reducer;
export const { filtrarNumeros, reset } = cartelaSlice.actions;
