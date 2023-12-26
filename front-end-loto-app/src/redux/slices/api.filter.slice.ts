import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { ApiService } from "../../services/ApiService";
import dotenv from "dotenv";

dotenv.config();
const baseURL = process.env.VITE_API_BASE_URL;

interface FilteredGames {
  games?: number[][];
  quantity?: number;
}

// interface ApiState {
//   loading: boolean;
//   quantity: number;
//   error: string;
// }

// const initialState: ApiState = {
//   loading: false,
//   quantity: 0,
//   error: "",
// };

export const fetchQnt = createAsyncThunk(
  "api/cartela/check",
  async (numbers: number[]) => {
    const response: AxiosResponse<FilteredGames[]> = await ApiService.post(
      `${baseURL}/cartela/filter`,
      numbers
    );
    return response.data;
  }
);
