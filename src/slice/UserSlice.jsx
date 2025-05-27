import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";

export const register = createAsyncThunk("http://localhost:3001/users", async (userData) => {
  const response = await axios.post("http://localhost:3001/users", userData);
  return response.data;
});


const UserSlice = createSlice({
  name: "user",
  initialState: {
    user: null, 
    isAuthenticated: false,
    loading: false,
  },
  reducers: {
    login(state, action) {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.loading = false;
    },
    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
      state.loading = false;
    },

  },
extraReducers: (builder) => {
    builder.addCase(register.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },

});

export const { login, logout, } = UserSlice.actions;
export default UserSlice.reducer;