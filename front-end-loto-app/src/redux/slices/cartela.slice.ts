import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: Jogadas = {
  jogadas: [],
};

const cartelaSlice = createSlice({
  name: "historico",
  initialState,
  reducers: {
    adicionarHistoria: (state, action: PayloadAction<Possibilidades[]>) => {
      state.jogadas = [...state.jogadas, action.payload];
    },
    reset: (state) => {
      state.jogadas = initialState.jogadas;
    },
  },
});

export default cartelaSlice.reducer;
export const { adicionarHistoria, reset } = historicoSlice.actions;