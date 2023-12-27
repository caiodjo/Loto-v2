import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { ApiService } from "../../services/ApiService";
import dotenv from "dotenv";

const baseURL = "http://localhost:7777";

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
      `api/cartela/check`,{
        numbers
      }
    );
    return response.data;
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
