import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { ApiService } from "../../services/ApiService";

interface ApiState {
  loading: boolean;
  error: string;
  passedGames: number[][];
}

const initialState: ApiState = {
  loading: false,
  error: "",
  passedGames: [],
};

export const fetchPassedGames = createAsyncThunk(
  "api/cartela/upload",
  async (file: FormData) => {
    const response: AxiosResponse<number[][]> = await ApiService.post(
      `api/cartela/upload`,
      file,
      {
        headers: {
          "Content-Type": `multipart/form-data`,
        },
      }
    );
    return response.data;
  }
);

const apiUploadSheetSlice = createSlice({
  name: "uploadSheet",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPassedGames.pending, (state: ApiState) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchPassedGames.rejected, (state: ApiState, action) => {
        state.loading = false;
        state.error = action.error.message ?? "";
      })
      .addCase(
        fetchPassedGames.fulfilled,
        (state: ApiState, action: PayloadAction<number[][]>) => {
          state.loading = false;
          state.passedGames = action.payload;
        }
      );
  },
});

export const { reducer: apiUploadSheetReducer } = apiUploadSheetSlice;
export default apiUploadSheetSlice;
