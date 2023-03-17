import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const streetsapi_get_streets_list = createAsyncThunk(
  "streetsapi_response_get_Newdatacalls/streetsapi_get_streets_list",
  async payload => {
    const response = await apiService.streetsapi_get_streets_list(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const streetsapi_response_get_NewdatacallsSlice = createSlice({
  name: "streetsapi_response_get_Newdatacalls",
  initialState,
  reducers: {},
  extraReducers: {
    [streetsapi_get_streets_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [streetsapi_get_streets_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [streetsapi_get_streets_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  streetsapi_get_streets_list,
  slice: streetsapi_response_get_NewdatacallsSlice
}
