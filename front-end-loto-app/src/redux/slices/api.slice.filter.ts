import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { ApiService } from "../../services/ApiService";
import { blob } from "stream/consumers";

interface FilteredGames {
  games: number[][];
  quantity: number;
}

interface ApiState {
  loading: boolean;
  quantity: number;
  error: string;
}

const initialState: ApiState = {
  loading: false,
  quantity: 0,
  error: "",
};

export const fetchQnt = createAsyncThunk(
  "api/cartela/check",
  async (numbers: number[]) => {
    const response: AxiosResponse<number> = await ApiService.post(
      `api/cartela/check`,
      {
        numbers,
      }
    );
    return response.data;
  }
);

export const generateResult = createAsyncThunk(
  "api/cartela/build",
  async (games: number[][]) => {
    try {
      const response: AxiosResponse = await ApiService.post(
        `api/cartela/build`,
        { games },
        { responseType: "blob" }
      );
      // Criação de um URL temporário para o Blob e inicia o download
      console.log(response);
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.download = "teste.xlsx";
      document.body.appendChild(link);
      link.click();

      // Limpeza após o download
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("error", error);
      throw error;
    }
  }
);

const apiFilterSlice = createSlice({
  name: "apiFilter",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchQnt.pending, (state: ApiState) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchQnt.rejected, (state: ApiState, action) => {
        state.loading = false;
        state.error = action.error.message ?? "";
      })
      .addCase(
        fetchQnt.fulfilled,
        (state: ApiState, action: PayloadAction<number>) => {
          state.loading = false;
          state.quantity = action.payload;
        }
      );
  },
});

export const { reducer: apiFilterReducer } = apiFilterSlice;
export default apiFilterSlice;
